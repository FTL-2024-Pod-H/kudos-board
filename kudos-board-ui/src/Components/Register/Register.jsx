import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  //handle register and toast errors
  const handleRegister = async () => {
    if (!username || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      //register the user
      const response = await axios.post(
        "http://localhost:3000/users/register",
        { username, password }
      );
      //login the user
      const loginResponse = await axios.post(
        "http://localhost:3000/users/login",
        { username, password }
      );

      //store the toekn in the localstorage as token
      localStorage.setItem("token", loginResponse.data.token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error || "Registration failed: Username may already be taken or invalid.");
      } else {
        toast.error("Registration failed, please try again later");
      }
    }
  };
  return(
  <>
  <div className="register-form-container">
    <ToastContainer  position="top-center" autoClose={3000} hideProgressBar={true}/>
    <h2>Register</h2>
    <input
      className="register-form"
      type="text"
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
      required
    />
    <input
      className="register-form"
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <input
      className="register-form"
      type="text"
      placeholder="Confirm Password"
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
    <button className="register-button" onClick={handleRegister}>Register</button>
    <button className="register-button" onClick={() => navigate("/login")}>Go to Login</button>
  </div>
  </>
  );
};
export default Register;