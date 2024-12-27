import React, { useContext, useEffect, useReducer, useState } from "react";

import { Authcontext } from "./Authcontextprovider";

export default function Auth() {
  let authform;
  const { Toggle ,switchbutton,formrenderer,registereduser} = useContext(Authcontext);
  let con_URL;
  function reducer(state,action) {
    switch(action.type){
      case "LOGIN":
        con_URL ="ws://localhost:8080/login";
      case "SIGNUP":
        con_URL ="ws://localhost:8080/signup";
      default:
        return state;
    }
  }
  const [state,dispatch] = useReducer(reducer,con_URL);
  if(registereduser){dispatch({type:"LOGIN"})}
  else{dispatch({type:"SIGNUP"})}
  useEffect(() => {
    try{
      const ws = new WebSocket({con_URL});
      ws.onopen=() => {
        console.log("connection active");
      }
      ws.onerror=(error)=>{
        alert("unable to establish web socket connection");
      }
      ws.onmessage=(message)=>{
        console.log(message);
      }
      return () => {
        ws.close();
      }
    }catch(error){
      console.log(error);
    }
  },[con_URL]);
  
function Loginhandler() {
  console.log("login trigerred");
}

  return (
    <React.Fragment>
      <div>
      <main>{formrenderer()}</main>
      <button onClick={Toggle}>{switchbutton}</button>
      </div>
      </React.Fragment>
  );
}
