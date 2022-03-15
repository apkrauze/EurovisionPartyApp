import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Room from "./components/Room/Room";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contestants from "./screens/Contestants";
import Leaderboard from "./screens/Leaderboard";
import Profile from "./screens/Profile";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Room />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/contestants" exact element={<Contestants />} />
      <Route path="/leaderboard" exact element={<Leaderboard />} />
      <Route path="/profile" exact element={<Profile />} />
    </Routes>
  );
}

export default App;
