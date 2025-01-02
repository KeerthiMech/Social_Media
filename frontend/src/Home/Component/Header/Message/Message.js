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
      navigator('messages/messagestrip');
    } catch (err) {}
  }
  useEffect(() => {
    async function fetchmessages() {
    try {
      const chatdata = await sendrequest(
        `http:localhost/${userID}/messages/`,
        "GET"
      );
      setchats(chatdata);
    } catch (err) {}
  }}, []);
 const msg =() => {
  if(message.length === 0 ) {
    return (
      <div>
        <h3>No messages found</h3>
      </div>
    )
  }
  else {
    return (
      <ol>{message.map((msg) => {
        return (
          <ul><MessageStrip
            profile={msg.profile}
            username={msg.username}
            preview={msg.preview}
            time={msg.time}
            seencheck={msg.seencheck}
            onClick={messageOpener}
          /></ul>
        );
      })}</ol>
    )
  }
 }
  return (
    <div>
      {isloading && <Loadingspinner />}
      <main>{!isloading && msg()}</main>
    </div>
  );
}