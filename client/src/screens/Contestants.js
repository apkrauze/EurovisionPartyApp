import React from "react";
import { useLocation } from "react-router-dom";
import BottomNavBar from "../components/BottomNavBar";
import useStore from "../zustand";

function Contestants() {
  const user = localStorage.getItem("username");
  const room = localStorage.getItem("room");
  const socket = useStore((store) => store.socket);

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

// import React, { useState, useEffect } from "react";
// //import useLocation from "react-router";
// import queryString from "query-string";
// import io from "socket.io-client";
// import BottomNavBar from "../components/BottomNavBar";

// const socket = io.connect("http://localhost:3001");

// const Contestants = ({ location }) => {
//   const [room, setRoom] = useState("");
//   const user = localStorage.getItem("username");

//   //const { room } = queryString.parse(useLocation().search);

//   useEffect(() => {
//     const { room } = queryString.parse(location.search);

//     setRoom(room);

//     socket.emit("join_room", { room }, (error) => {
//       if (error) {
//         alert(error);
//       }
//     });
//   }, [location, location.search]);

//   return (
//     <div>
//       <h3>
//         {user} have entered the {room} party
//       </h3>
//       <BottomNavBar name="contestants" />
//     </div>
//   );
// };

// export default Contestants;
