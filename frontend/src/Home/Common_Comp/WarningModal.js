import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

function ModalOverlay(props) {
  const modal = (
    <div className="mainclass">
      <header className="headerclass">
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}>
        <p className="contentclass">{props.content}</p>
        <button className="buttonclass" onClick={props.onCancel}>{props.button}</button>
      </form>
    </div>
  );
  return ReactDOM.createPortal(modal, document.getElementById("modal"));
}

export default function WarningModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <React.Fragment>
      <Backdrop onClick={props.onCancel} />
      <ModalOverlay {...props} />
    </React.Fragment>
  );
}