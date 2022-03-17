import io from "socket.io-client";
import { useState } from "react";
import Contestants from "../../screens/Contestants";
//import { useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:3001");

const Room = () => {
  const [room, setRoom] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);

  const user = localStorage.getItem("username");

  //const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //SOCKET CONNECTION...
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", { room, user });
      setShowNextPage(true);
      //navigate("/contestants");
    }
  };

  return (
    <div>
      {!showNextPage ? (
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
            }}
          />
          <button onClick={joinRoom}>Join A Party</button>
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
