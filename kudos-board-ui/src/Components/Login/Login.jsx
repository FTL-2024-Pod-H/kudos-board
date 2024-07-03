import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });
      //store token in localStorage
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Invalid username or password"); 
        } else {
            toast.error("Login failed, please try again later");
        }
    }
  };

  return (
    <div className="login-form-container">
        <ToastContainer  position="top-center" autoClose={3000} hideProgressBar={true}/>
      <h2>Login</h2>
      <input
        className="login-form"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-form"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <button className="login-button" onClick={() => navigate("/register")}>Go to Register</button>
    </div>
  );
};

export default Login;