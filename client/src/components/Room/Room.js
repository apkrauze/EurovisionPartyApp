const Room = () => {
  // const [room, setRoom] = useState("");
  // const [showNextPage, setShowNextPage] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //HERE COMES THE SOCKET CONNECTION...
  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //     setShowNextPage(true);
  //   }
  // };

  return (
    <div>
      <h1>Room choice</h1>
      {/* <input
        type="text"
        placeholder="Room..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Room</button> */}
      <br></br>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Room;
