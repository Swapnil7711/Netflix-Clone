import React, { useState } from "react";
import "./Loginscreen.css";
import SignUpScreen from "./SignUpScreen";
function Loginscreen() {
  const [signIn, setSignIn] = useState("false");

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginscreen__button">Sign In</button>

        <div className="loginscreen__gradient"></div>
        <div className="loginscreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and More.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginscreen__input">
                <form>
                  <input type="email" placeholder="Email" />
                  <button
                    className="loginscreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
