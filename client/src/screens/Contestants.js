// import React from "react";
// import BottomNavBar from "../components/BottomNavBar";

// function Contestants({ socket, room }) {
//   const user = localStorage.getItem("username");
//   return (
//     <div>
//       <h3>
//         Hello {user} welcome to {room} party!
//       </h3>
//       <BottomNavBar name="contestants" />
//     </div>
//   );
// }

// export default Contestants;

import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import BottomNavBar from "../components/BottomNavBar";

const socket = io.connect("http://localhost:3001");

const Contestants = ({ location }) => {
  const [room, setRoom] = useState("");
  const user = localStorage.getItem("username");

  useEffect(() => {
    const { room } = queryString.parse(location.search);
    console.log(location);

    setRoom(room);

    socket.emit("join_room", { room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location, location.search]);

  return (
    <div>
      <h3>
        {user} have entered the {room} party
      </h3>
      <BottomNavBar name="contestants" />
    </div>
  );
};

export default Contestants;
