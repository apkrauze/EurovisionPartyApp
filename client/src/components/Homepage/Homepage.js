const Homepage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  //HERE COMES THE SOCKET CONNECTION...

  return (
    <div>
      <h1>Room choice</h1>
      <input type="text" placeholder="Party Number"></input>
      <button>Take me there</button>
      <br></br>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;
