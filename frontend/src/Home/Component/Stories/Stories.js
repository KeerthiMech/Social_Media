import React, { useEffect, useState } from "react";
import { useHTTPcommunicator } from "../../custom_hook/http-hook";
import { useParams } from "react-router-dom";

import Loadingspinner from "../../Common_Comp/Loadingspinner";
import Storycus from "./Storycus";
import WarningModal from "../../Common_Comp/WarningModal";

export default function Stories(props) {
  const [storydata, setstorydata] = useState([]);
  const [isstoryloaded,setisstoryloaded] = useState(false);
  const userId = useParams().userId;
  const { isloading, error, sendrequest, clearerror } = useHTTPcommunicator();
  useEffect(() => {
    async function fetchplaces() {
      try {
        const responsedata = await sendrequest(
          (`http:localhost:3000/stories/${userId}`),("GET"));
        setstorydata(responsedata.stories);
      } catch (error) {
        <WarningModal header="error" content ={error} button="okay"/> 
      }
    }
  }, [sendrequest, userId]);
  
const story = () => {
  if(storydata.length === 0) {
    return (
      <div>
        <h1>No stories found</h1>
        <WarningModal header="error" content ="No stories found" button="okay"/>
      </div>
      
    )
  }
  else{
    return(
      <ol>
      {storydata.map((story) => {
    return (
      <li><Storycus
        userprofile={story.userprofile}
        friendly={story.friendly}
        username={story.username} 
      /></li>
    );
  })
}
</ol>)
  }
}
  return (
    <React.Fragment>
      {isloading && <Loadingspinner />}
      <main>{ story()}</main>
    </React.Fragment>
  );
}
