import React from "react";
import "../styles/SlotMachine.css"
import PepeBackground from "../components/PepeBackground/PepeBackground";
import Navbar from "../components/Navbar/Navbar";

function SlotMachine() {
  return( <>
    <div id="main">
      <PepeBackground/>
      <Navbar/>
      <div id="slot-machine-wrapper">
      <div id="slot-machine"></div>
      <div className="coin first"></div>
      <div className="coin second"></div>
      <div className="coin third"></div>
      <div className="coin fourth"></div>
      <div className="glowing-background"></div>
      </div>
    </div>
  </>);
}

export default SlotMachine;
