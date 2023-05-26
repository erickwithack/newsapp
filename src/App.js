import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Homepage from "./Components/Homepage/Homepage";
import "react-bootstrap/dist/react-bootstrap.min.js";
import Profile from "./Components/Profile/Profile";

function App() {
  const name = localStorage.getItem("userName");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        {name ? (
          <Route exact path="/" element={<Homepage />} />
        ) : (
          <Route exact path="/login" element={<Login />} />
        )}
        {name ? (
          <Route exact path="/profile" element={<Profile />} />
        ) : (
          <Route exact path="/login" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
