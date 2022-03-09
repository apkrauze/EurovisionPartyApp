import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import background from "./assets/background.mp4";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Homepage />} />}
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

// <div className="background_container">
//   <video className="videoTag" autoPlay loop muted>
//     <source src={background} type="video/mp4" />
//   </video>
// </div>;
