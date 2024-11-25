import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Route,
  Router,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import "./styles.css";
import FooterNav from "./Home/Nav/FooterNav";
import Home from "./Home/Component/Home";
import Newpost from "./Home/Component/Newpost";
import Search from "./Home/Component/Search";
import Reels from "./Home/Component/Reels";
import Profile from "./Home/Component/Profile";
import Auth from "./Home/Component/Auth";
import Likes from "./Home/Header/Likes";
import Message from "./Home/Header/Message";

export default function App() {
  let routes;
  const [login, setlogin] = useState(true);
  const [uid, setuid] = useState("");

  if (login) {
    routes = (
      <BrowserRouter>
        <Route to="/home">
          <Home />
        </Route>
        <Route to="/search">
          <Search />
        </Route>
        <Route to="/newpost">
          <Newpost />
        </Route>
        <Route to="/reels">
          <Reels />
        </Route>
        <Route to="/profile/:uid">
          <Profile />
        </Route>
        <Route to="/likes">
          <Likes />
        </Route>
        <Route to="message">
          <Message />
        </Route>
        <Redirect to="/home" />
      </BrowserRouter>
    );
  } else {
    routes = (
      <Switch>
        <Route to="/auth">
          <Auth />
        </Route>
      </Switch>
    );
  } 
 
  return (
    <React.Fragment>
      <Router>
        <FooterNav />
        <main>{routes}</main>
      </Router>
    </React.Fragment>
  );
}
