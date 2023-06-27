import "./App.css";
import MyComponent from "./component/demo";
import MyCheck from "./component/check";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./component/Login";
import ProtectedRoutes from "./middleware/ProtectedRoutes";
import Register from "./component/Register"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/check" element={<ProtectedRoutes Component={MyCheck} />}></Route>
          <Route exact path="/component" element={<ProtectedRoutes Component={MyComponent} />}></Route>
          <Route exact path="/login" element={<Login/> }></Route>
          <Route exact path="/signup" element={<Register/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
