import React from "react";
import { useState, useRef, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import MyComponent from "./demo";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import jwt from "jsonwebtoken";

export function Login(props) {
  // const login = () => {
  //   localStorage.setItem('login', true)
  // }

  // useEffect(() => {
  //   let login = localStorage.getItem("login");
  //   if (login) {
  //     navigate("/component");
  //   }
  // });

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = (event) => {
    // localStorage.setItem('login', true)
    event.preventDefault()
    // Make a POST request to the login endpoint
    axios
      .post("http://localhost:4000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        // Check the response from the server
        if (response.data.success) {
          // User login successful
          console.log("Login successful");
          localStorage.setItem('login', true)
          navigate('/component');
        } else {
          // User login failed
          console.log("Invalid username or password");
          setErrorMessage(
            "Invalid username or Password"
          );
        }
      })
      .catch((error) => {
        console.log("Error occurred during login:", error);
      });
  };
  

  return (
    <div className="HomePages">
      <div className="form-group">
        <form>
          <div className="input-container">
            <label style={{ color: "Black" }}>Username </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="error-message">
            {errorMessage && (
              <span style={{ color: "Red" }}>{errorMessage}</span>
            )}
          </div>
          </form>
          <button
            onClick={handleLogin}
            sx={{ color: "aliceblue", backgroundColor: "rgb(52, 192, 243)", "&: hover": {backgroundColor: "rgb(52, 192, 243)"}}}
          >
            Login
          </button>
        <br /><br />
        <button onClick={() => props.onFormSwitch("Register")}>Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
