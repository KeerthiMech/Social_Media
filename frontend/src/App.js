import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import FooterNav from "./Home/Nav/FooterNav";
import Home from "./Home/Component/Home/Home";
import Newpost from "./Home/Component/Newpost/Newpost";
import Search from "./Home/Component/Search/Search";
import Reels from "./Home/Component/Reels/Reels";
import Profile from "./Home/Component/Profile/Profile";
import Auth from "./Home/Component/Auth/Auth";
import Likes from "./Home/Component/Header/Likes";
import Message from "./Home/Component/Header/Message/Message";
import Stories from "./Home/Component/Stories/Stories";
import Header from "./Home/Component/Header/Header";
import { Authcontext } from "./Home/Component/Auth/Authcontextprovider";

export default function App() {
  let routes;
  const { registereduser} = useContext(Authcontext);
  const [uid, setuid] = useState("");

  if (registereduser) {
    routes = (
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/newpost">
          <Newpost />
        </Route>
        <Route path="/reels">
          <Reels />
        </Route>
        <Route path="/profile/:uid">
          <Profile />
        </Route>
        <Route path="/likes">
          <Likes />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
          <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/stories">
          <Stories />
        </Route>
        <Redirect path="/search" />
        </Switch>
    );
  } else {
    routes = (
      <React.Fragment>
        <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        </Switch>
        </React.Fragment>
    );
  } 
 
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <main>{routes}</main>
        <FooterNav />
      </Router>
    </React.Fragment>
  );
}
