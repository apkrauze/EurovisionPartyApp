import React from "react";
import BottomNavBar from "../components/BottomNavBar";

function Contestants({ socket, room }) {
  const user = localStorage.getItem("username");
  return (
    <div>
      <h3>
        Hello {user} welcome to {room} party!
      </h3>
      <BottomNavBar name="contestants" />
    </div>
  );
}

export default Contestants;
