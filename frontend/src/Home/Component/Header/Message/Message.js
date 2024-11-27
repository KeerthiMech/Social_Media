import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useHTTPcommunicator } from "../../../custom_hook/http-hook";
import MessageStrip from "./MessageStrip";
import Loadingspinner from "../../../Common_Comp/Loadingspinner";


export default function Message() {
  const [message, setmessage] = useState([]);
  const [chats, setchats] = useState([]);
  const userID = useParams().userID;
  const { isloading, error, sendrequest, clearerror } = useHTTPcommunicator;
  async function messageOpener() {
    try {
      const messagedata = await sendrequest(
        `http:localhost/${userID}/messages/preview`,
        "GET"
      );
      setmessage(messagedata);
    } catch (err) {}
  }
  useEffect(async () => {
    try {
      const chatdata = await sendrequest(
        `http:localhost/${userID}/messages/`,
        "GET"
      );
      setchats(chatdata);
    } catch (err) {}
  }, []);

  const messagecomponent = message.map((msg) => {
    return (
      <MessageStrip
        profile={msg.profile}
        username={msg.username}
        preview={msg.preview}
        time={msg.time}
        seencheck={msg.seencheck}
        onClick={messageOpener}
      />
    );
  });
  return (
    <div>
      {isloading && <Loadingspinner />}
      {!isloading && { messagecomponent }}
    </div>
  );
}