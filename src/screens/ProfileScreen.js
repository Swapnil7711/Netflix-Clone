import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import { auth } from "../firebase";

import Plans from "../Plans.js";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut();
    dispatch(logout());
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="prifileScreen__plans">
              <h3>Plans</h3>
              <p>Renewal Data: 04/03/2021</p>

              <Plans title="Netflix Standard" res="1080p" />
              <Plans title="Netflix Basic" res="480p" />
              <Plans title="Netflix Premium" res="4K+HDR" currentPlan={true} />

              <button onClick={signOut} className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
