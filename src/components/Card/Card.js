import React from "react";
import "./Card.css"

function Card({name, message, cornerText}) {
  return( 
  <div id="card-main">
    <h1>{name}</h1>
    <p>{message}</p>
    <button className="backward">{"<"}</button>
    <button className="forward">{">"}</button>
      <a href="/#">{cornerText}</a>  
    <button id="playButton">Play Now</button>
  </div>
    
  )
}

export default Card;
