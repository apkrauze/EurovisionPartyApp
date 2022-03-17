import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GrFlag, GrFlagFill } from "react-icons/gr";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineLeaderboard, MdLeaderboard } from "react-icons/md";
import { BsArrowLeftCircle, BsArrowLeftCircleFill } from "react-icons/bs";

const BottomNavBar = (props) => {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case "home":
        navigate("/");
        break;
      case "contestants":
        navigate("/contestants");
        break;
      case "profile":
        navigate("/profile");
        break;
      case "leaderboard":
        navigate("/leaderboard");
        break;
      default:
        navigate("/");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <div className="bottom-nav">
      <div className="bn-tab">
        {activeTabs === "home" ? (
          <BsArrowLeftCircleFill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        ) : (
          <BsArrowLeftCircle
            size="35"
            color="#000"
            onClick={() => setActiveTabs("home")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "contestants" ? (
          <GrFlagFill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("contestants")}
          />
        ) : (
          <GrFlag
            size="35"
            color="#000"
            onClick={() => setActiveTabs("contestants")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "profile" ? (
          <RiAccountCircleFill
            size="35"
            color="#000"
            onClick={() => setActiveTabs("profile")}
          />
        ) : (
          <RiAccountCircleLine
            size="35"
            color="#000"
            onClick={() => setActiveTabs("profile")}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "leaderboard" ? (
          <MdLeaderboard
            size="35"
            color="#000"
            onClick={() => setActiveTabs("leaderboard")}
          />
        ) : (
          <MdOutlineLeaderboard
            size="35"
            color="#000"
            onClick={() => setActiveTabs("leaderboard")}
          />
        )}
      </div>
    </div>
  );
};

export default BottomNavBar;
