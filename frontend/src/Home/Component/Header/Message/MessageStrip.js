import React from "react";

import "./MessageStrip.css";

export default function MessageStrip(props) {
  return (
    <div>
      <body>
        <div class="notification">
          <div class="profile-picture">
            <img src={props.profile} alt="Profile Picture"></img>
          </div>
          <div class="content">
            <p>
              <strong>{props.username}</strong>
              <span onClick={props.onClick}>{props.preview}</span>
            </p>
            <span class="time">{props.time}</span>
          </div>
          <div class="status">
            <span class={props.seencheck}></span>
            <div class="camera-icon">📷</div>
          </div>
        </div>
      </body>
    </div>
  );
}
