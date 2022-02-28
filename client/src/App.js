import React from "react";
import "./App.css";
import background from "./assets/background.mp4";

function App() {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
