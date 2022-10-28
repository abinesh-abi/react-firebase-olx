import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import { AutheContext, FirebaseContext } from "./store/Context";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */

function App() {
  const { user, setUser } = useContext(AutheContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/view">
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
