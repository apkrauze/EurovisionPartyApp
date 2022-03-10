import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Room from "./components/Room/Room";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import background from "./assets/background.mp4";
import React from "react";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Room />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

{
  /* <div className="background_container">
  <video className="videoTag" autoPlay loop muted>
    <source src={background} type="video/mp4" />
  </video>
</div>; */
}
