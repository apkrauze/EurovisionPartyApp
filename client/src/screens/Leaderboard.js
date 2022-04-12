import React from "react";
import BottomNavBar from "../components/BottomNavBar";
import useStore from "../zustand";

function Leaderboard() {
  const room = useStore((store) => store.room);
  console.log(room);
  return (
    <div>
      Leaderboard {room}
      <BottomNavBar name="leaderboard" />
    </div>
  );
}

export default Leaderboard;
