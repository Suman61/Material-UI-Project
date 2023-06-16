import React from "react";
import { useState } from "react";

function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      setErrorMessage("The passwords you entered do not match.");
      return;
    }
    console.log( username + " " + password + " " + confirmpassword + " " + email );
    const message = await (
      await fetch("http://localhost:3001/register", {
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
    if (message.status) setErrorMessage(message.message);
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
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please type Password"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Confirm Password </label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Please type Confirm Password"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Email id </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please type Email id"
            />
          </div>
          <div className="error-message">
            {errorMessage && (
              <span style={{ color: "Red" }}>{errorMessage}</span>
            )}
          </div>
          <button
            className="button-container"
            type="submit"
            onClick={submitForm}
          >
            submit
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Register;
