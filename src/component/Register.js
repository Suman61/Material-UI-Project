import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { green } from "@mui/material/colors";

function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const[style, setStyle] = useState();
  const navigate = useNavigate();

  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("The passwords you entered do not match.");
      return;
    }
    console.log(
      username + " " + password + " " + confirmpassword + " " + email
    );
    const message = await (
      await fetch("http://localhost:4000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,
          password,
          confirmpassword,
          email,
        }),
      })
    ).json();
    if (message.status) {
      setErrorMessage(message.message);
    }
    else
      setErrorMessage(
        "Enter all Fields. Password must be alphanumeric and must have atleast 6 length. Enter a valid Email. "
      );
  };

  return (
    <div className="RegisterPages">
      <div className="form-group-register">
        <form>
          <div className="input-container">
            <label style={{ color: "Black" }}>Username </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Please type UserName"
              style={{
                border: "2px solid gray",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Password </label>
            <input
              type={visibleFirst ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please type Password"
              style={{
                border: "2px solid gray",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
            />
            <span
              style={{
                color: "gray",
                position: "relative",
                top: "-40px",
                left: "165px",
              }}
              onClick={() => setVisibleFirst(!visibleFirst)}
            >
              {visibleFirst ? <Visibility /> : <VisibilityOff />}
            </span>
          </div>

          <div className="input-container">
            <label style={{ color: "Black" }}>Confirm password </label>
            <input
              type={visibleSecond ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Please type Confirm Password"
              style={{
                border: "2px solid gray",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
            />
            <span
              style={{
                color: "gray",
                position: "relative",
                top: "-40px",
                left: "165px",
              }}
              onClick={() => setVisibleSecond(!visibleSecond)}
            >
              {visibleSecond ? <Visibility /> : <VisibilityOff />}
            </span>
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>E-mail address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please type E-mail address"
              style={{
                border: "2px solid gray",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
            />
          </div>
          <div className="error-message">
            {errorMessage && (
              <span style={{ color: "Red" }}>{errorMessage}</span>
            )}
          </div>
          <div  className="d-flex justify-content-center">
          <Button
            onClick={() => navigate("/login")}
            sx={{
              color: "aliceblue",
              backgroundColor: "rgb(52, 192, 243)",
              "&: hover": { backgroundColor: "rgb(52, 192, 243)" },
            }}
          >
            Sign In
          </Button>
          &nbsp;
          <Button
            type="submit"
            onClick={submitForm}
            sx={{
              color: "aliceblue",
              backgroundColor: "rgb(52, 192, 243)",
              "&: hover": { backgroundColor: "rgb(52, 192, 243)" },
            }}
          >
            Sign Up
          </Button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Register;
