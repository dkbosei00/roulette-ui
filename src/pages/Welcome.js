import React from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import PepeBackground from "../components/PepeBackground/PepeBackground";
import "../styles/Welcome.css";

function Welcome() {
  return (<>
  <div id="main">
    <div id="wrapper">
    <Navbar
    token= "100"
    wallet= "0x5b1A885"
    />
    <Card
    name= "COME ON IN, User"
    message= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec."
    cornerText="Demo"
    />
    <PepeBackground/>
    <div className="bkg" id="top"></div>
    <div className="bkg" id="bottom"></div>
    </div>
    
  </div>
    </>)
}

export default Welcome;
