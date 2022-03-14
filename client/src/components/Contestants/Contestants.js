import React from "react";

function Contestants({ socket, room }) {
  const user = localStorage.getItem("username");
  return (
    <div>
      Hello {user} welcome to {room} party
    </div>
  );
}

export default Contestants;
