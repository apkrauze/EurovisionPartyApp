const Homepage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h1>Room choice</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;
