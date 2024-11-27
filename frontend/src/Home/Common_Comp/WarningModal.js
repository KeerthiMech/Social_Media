import React from "react";
import { ReactDOM } from "react";

function ModalOverlay(props) {
        const modal=( <div className="mainclass">
            <header className="headerclass">
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event=> event.preventDefault()}>
                <p className="contentclass">{props.content}</p>
                <button className="buttonclass" >{props.button}</button>
            </form>
        </div> );
    return ReactDOM.createPortal(modal,document.getElementById("modal"));
}
export default function WarningModal (props) {
    return (
        <React.Fragment>
            <ModalOverlay {...props}/>
        </React.Fragment>
    );
}