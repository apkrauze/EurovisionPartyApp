import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import background from "./assets/background.mp4";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SignUp></SignUp>
      <Login></Login>
      <Homepage></Homepage>
    </div>
  );
}

export default App;

// <div className="background_container">
//   <video className="videoTag" autoPlay loop muted>
//     <source src={background} type="video/mp4" />
//   </video>
// </div>;
