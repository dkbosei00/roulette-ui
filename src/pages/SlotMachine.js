import React from "react";
import "../styles/SlotMachine.css"
import PepeBackground from "../components/PepeBackground/PepeBackground";
import Navbar from "../components/Navbar/Navbar";
import PlayButton from "../components/PlayButton/PlayButton";

function SlotMachine() {
  const vector = require("../assets/images/Vector.png")
  const pepe = require("../assets/images/PEPE_GAME_BODY.png")


  return( <>
    <div id="main">
      <PepeBackground/>
      <Navbar/>
      <div id="slot-machine-wrapper">
      <div id="jackpot-wrapper">
        <div id="jackpot-title">
          <span>JACKPOT</span>
        </div>
        <div id="prize-wrapper">
          <span id="prize-money">$1,388,000</span>
        </div>
        <img id="pepe-jackpot" src={pepe} alt="pepe"/>
      </div>
      <div id="slot-machine"></div>
      <div className="coin first"></div>
      <div className="coin second"></div>
      <div className="coin third"></div>
      <div className="coin fourth"></div>
      <div className="glowing-background">
        <div id="overall-frame">
          <div className="game-frame">
            <span className="frame-title">Bonus PEPEs</span>
          </div>
          <div className="game-frame">
            <span className="frame-title">Ranking (+3)</span>
            <span className="frame-amount">341</span>
          </div>
          <div className="game-frame">
            <span className="frame-title">Last win</span>
            <span className="frame-amount">$5.9</span>
          </div>
        </div>
        <div id="bonus-wrapper">
          {/* <button><img src={vector} alt="Refresh"/></button> */}
          <button id="bonus-button">Bonus Reward</button>
        </div>
      </div>
      <div id="bet-wrapper">
        <div id="amount">
            <span id="wager">$1000.50</span>
        </div>
        <PlayButton text="BET"/>
        <div id="toggleButtons">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div id="small-nav">
        <div id="volume" className="small-nav-item"></div>
        <div id="chat" className="small-nav-item"></div>
        <div id="ranking" className="small-nav-item"></div>
      </div>
      </div>
    </div>
  </>);
}

export default SlotMachine;
