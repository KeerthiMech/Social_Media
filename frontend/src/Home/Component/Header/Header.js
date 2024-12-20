import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header(props) {
  return (
    <div className="body">
      <div className="Navbar">
        <h1 className="logo">Instagram</h1>
        <div className="icons">
          <div
            className="icon"
            class="chat-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <NavLink to="/likes">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesdFflLuAXVCqPa6IEQIR1BAR_QNA_Hl4TA&s" alt></img>
            </NavLink>
            <span class="badge">{props.likescount}</span>
          </div>
          <div className="Message">
            <NavLink to="/message">
              <img src="data:image/jpeg;base64,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"></img>
            </NavLink>
            <span class="badge">{props.messagecount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
