const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByUsername,
  findUserById,
} = require("../models/userModal");


const register = async (req, res) => {
  const { username, password } = req.body;
  //   console.log("username", username, "password", password);
  try {

    // Check if the username already exists
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword);
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "User register error, maybe the user exists" });
  }
};
const secretKey = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (user && (await bcrypt.compare(password, user.password))) {
    // create a json web token
    const token = jwt.sign(
      { userId: user.id, userName: user.username }, 
      secretKey //setup env variable for secret key
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: "Invalid Credentials" });
  }
};


module.exports = { register, login };