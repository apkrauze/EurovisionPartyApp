import io from "socket.io-client";
import { useState } from "react";
import Contestants from "../Contestants/Contestants";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //SOCKET CONNECTION...
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowNextPage(true);
    }
  };

  return (
    <div>
      {!showNextPage ? (
        <div>
          <h1>Party choice</h1>
          <input
            type="text"
            placeholder="Party name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Party</button>
        </div>
      ) : (
        <Contestants socket={socket} room={room} username={username} />
      )}
      <br></br>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Room;
