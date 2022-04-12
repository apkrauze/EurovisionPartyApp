import io from "socket.io-client";
import { useState } from "react";
//import Contestants from "../../screens/Contestants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useStore from "../../zustand";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const [room, setRoom] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);
  const setSocket = useStore((store) => store.setSocket);
  const setGlobalRoom = useStore((store) => store.setRoom);

  const user = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //SOCKET CONNECTION...
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", { room, user });
      setShowNextPage(true);
      setSocket(socket);
      localStorage.setItem("room", room);
      //navigate("/contestants", { state: { socket: socket, room: room } });
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>
            Congratulations {user}! Invite your friends and vote together for
            you favourite artists this year!
          </h1>
          <h3>Party choice</h3>
          <input
            type="text"
            placeholder="Room..."
            onChange={(event) => {
              setRoom(event.target.value);
              setGlobalRoom(event.target.value);
            }}
          />
          {/* <Link
            onClick={() => joinRoom()}
            to="/contestants"
            state={{ socket, room }}
          >
            Join a party
            
          </Link> */}
          <button onClick={() => joinRoom()}>
            <Link to="/contestants">Join a party</Link>
          </button>

          {/* <button onClick={() => joinRoom()}>Join A Party</button> */}
        </div>
        <br></br>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Room;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Room() {
//   const [room, setRoom] = useState("");
//   const user = localStorage.getItem("username");

//   return (
//     <div>
//       <h1>Hi {user} join your party</h1>
//       <div>
//         <input
//           placeholder="Room"
//           type="text"
//           onChange={(event) => setRoom(event.target.value)}
//         />
//       </div>
//       <Link
//         onClick={(e) => (!room ? e.preventDefault() : null)}
//         to={`/contestants?room=${room}`}
//       >
//         <button type="submit">Sign In</button>
//       </Link>
//     </div>
//   );
// }
