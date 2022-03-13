import React from "react";

function Contestants({ socket, username, room }) {
  return (
    <div>
      Hello {username} welcome to {room} party
    </div>
  );
}

export default Contestants;
