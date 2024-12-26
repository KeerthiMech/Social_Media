import React, { useContext, useEffect, useState } from "react";

import { Authcontext } from "./Authcontextprovider";

export default function Auth() {
  useEffect(() => {
    try{
      const ws = new WebSocket('htttp:localhost:3030/post');
      ws.onopen=() => {
        console.log("connection active");
      }
      ws.onerror=(error)=>{
        alert("unable to establish web socket connection");
      }
      ws.onmessage=(message)=>{
        console.log(message);
      }
    }catch(error){
      console.log(error);
    }
  });
  let authform;
  const { Toggle ,switchbutton,formrenderer} = useContext(Authcontext);
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
