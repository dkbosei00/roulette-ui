import React from "react";
import "./PlayButton.css"

function PlayButton({text}) {
  return (<>
    <button id="playbutton-main">
      <span className="playFont">{text}</span>
      <span className="nowFont">now</span>
    </button>
  </>);
}

export default PlayButton;
