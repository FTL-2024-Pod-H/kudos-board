require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");

const userRoutes = require("../routes/userRoutes");
const boardRoutes = require("../routes/boardRoute");
const cardRoutes = require("../routes/cardRoute");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World, you are at the / route");
});

app.use("/boards", boardRoutes);
app.use("/cards", cardRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
