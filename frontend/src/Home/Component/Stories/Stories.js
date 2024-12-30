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
  if (storydata.length === 0) {
    setisstoryloaded(false);
  } else {
    setisstoryloaded(true);
  }
const story = () => {
  if(isloading) {
    return <Loadingspinner />
  }
  if(!isstoryloaded) {
    return <WarningModal header="error" content ={error} button="okay"/> 
  }
  if(!isloading && isstoryloaded) {
    return (
      <>
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
      </ol>
      </>
    )
  }
}
  return (
    <React.Fragment>
      <main>{story()}</main>
    </React.Fragment>
  );
}

