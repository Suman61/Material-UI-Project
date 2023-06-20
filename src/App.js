import "./App.css";
import MyComponent from "./component/demo";
import MyCheck from "./component/check";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import ProtectedRoute from "react-dom"

function App() {
  const [currentForm, SetCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    SetCurrentForm(formName);
  };

  // const toggleForm = () => {
  //   SetCurrentForm(currentForm === "Login" ? "Register" : "Login");
  // };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/check" element={<MyCheck />}></Route>
          <Route exact path="/component" element={<MyComponent />}></Route>
        </Routes>
      </Router>
      {/* {currentForm === "Register" ? <Register onFormSwitch={toggleForm}/>: <Login onFormSwitch={toggleForm}/>} */}
    </div>
  );
}

export default App;
