import React, { useContext, useEffect} from "react";

import { Authcontext } from "./Authcontextprovider";

export default function Auth() {
  const { Toggle ,switchbutton,formrenderer,req_Type} = useContext(Authcontext);
    useEffect(() => {
    try{
      const ws = new WebSocket({req_Type});
      ws.onopen=() => {
        console.log("connection active");
      }
      ws.onerror=(error)=>{
        alert(`unable to establish web socket connection ${req_Type}`);
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
  },[req_Type,Toggle]);  
  


  return (
    <React.Fragment>
      <div>
      <main>{formrenderer()}</main>
      <button onClick={Toggle}>{switchbutton}</button>
      </div>
      </React.Fragment>
  );
}
