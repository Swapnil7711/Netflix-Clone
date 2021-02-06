import React, { useEffect } from "react";
import Homescreen from "./screens/Homescreen.js";
import "./App.css";
import Loginscreen from "./screens/Loginscreen.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice.js";
import ProfileScreen from "./screens/ProfileScreen.js";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <Homescreen />
            </Route>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
