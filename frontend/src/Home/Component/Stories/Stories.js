import { useEffect, useState } from "react";
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
  let story = storydata.map((story) => {
    return (
      <Storycus
        userprofile={story.userprofile}
        friendly={story.friendly}
        username={story.username}
      />
    );
  });
  return (
    <div>
      {isloading && <Loadingspinner />}
      {!isstoryloaded && <WarningModal header="error" content ={error} button="okay"/> }
      {!isloading && isstoryloaded && { story }}
    </div>
  );
}

/* import { useEffect, useState } from "react";
import { useHTTPcommunicator } from "../custom_hook/http-hook";
import { useParams } from "react-router-dom";

import Storycus from "./Storycus";

export default function Stories(props) {
  const [storydata, setstorydata] = useState([]);
  const userId = useParams().userId;
  const [storyloaded, isstoryloaded] = useState();
  const { isloading, error, sendrequest, clearerror } = useHTTPcommunicator();
  useEffect(() => {
    async function fetchplaces() {
      try {
        const responsedata = await sendrequest(
          ((url = `http:localhost:3000/stories/${userId}`), (method = "GET"))
        );
        setstorydata(responsedata.stories);
      } catch (err) {}
    }
  }, [sendrequest, userId]);
  if (!storydata.length === 0) {
    isstoryloaded(false);
  } else {
    isstoryloaded(true);
  }
  let story = storydata.map((story) => {
    return (
      <Storycus
        userprofile={story.userprofile}
        friendly={story.friendly}
        username={story.username}
      />
    );
  });
  return <div>{storyloaded && { story }}</div>;
}  */

/*  
   function changedata() {
    const [storydata, setstorydata] = useState([
    {
      userprofile: "",
      color: "",
    }]);
    setstorydata((prevstorydata) => {
      return [
        ...prevstorydata,
        {
          userprofile:
            "https://media.licdn.com/dms/image/v2/D5603AQFL-_Gr1N2l4A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694369073825?e=1737590400&v=beta&t=vKQeWtyGK0hoy6Xe6l3HQ6bb1I5Lzh_PPJJPRDhhBoU",
          color: "notclose",
          username: "Keerthivasann_vasann",
        },
      ];
    });
    console.log("buton presses");
  }   */
/* storydata = [
  {
    userprofile:
      "https://media.licdn.com/dms/image/v2/D5603AQFL-_Gr1N2l4A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694369073825?e=1737590400&v=beta&t=vKQeWtyGK0hoy6Xe6l3HQ6bb1I5Lzh_PPJJPRDhhBoU",
    friendly: "close",
    username: "Kkeerthi",
  },
  {
    userprofile:
      "https://media.licdn.com/dms/image/v2/C560BAQFjHNUub2MPHA/company-logo_100_100/company-logo_100_100/0/1631328654457?e=1740009600&v=beta&t=3q0YWGzE1AeZpyCH10LCELneu5eM47ZTYpIcXvLvq_M",
    friendly: "notclose",
    username: "vvasann",
  },
];  */
