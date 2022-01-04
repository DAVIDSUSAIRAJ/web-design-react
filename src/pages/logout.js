import "../scss/logout.scss";
import { useState } from "react";
import avatar from "../images/original_avatar.jpg";

function Logout(params) {
  const [logoutfeed, setLogoutfeed] = useState(false);
  const handleLogout = () => {
    setLogoutfeed(!logoutfeed);
  };
  return (
    <div>
      <div className="logout">
        <div className="logout-card">
          <div className="avatar-img">
            <img src={avatar} alt="avatar-images"></img>
          </div>
          <div className="logout-button">
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="logout-feeds">
            {logoutfeed ? "logout successfully!!" : "You have not logout yet!!"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Logout;
