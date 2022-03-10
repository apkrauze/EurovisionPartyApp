import io from "socket.io-client";
import { useState } from "react";
import Contestants from "../Contestants/Contestants";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const [room, setRoom] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //SOCKET CONNECTION...
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setShowNextPage(true);
    }
  };

  return (
    <div>
      {!showNextPage ? (
        <div>
          <h1>Room choice</h1>
          <input
            type="text"
            placeholder="Room..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Contestants socket={socket} room={room} />
      )}
      <br></br>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Room;
