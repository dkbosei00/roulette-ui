import React from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import PepeBackground from "../components/PepeBackground/PepeBackground";
import "../styles/Welcome.css";

function Welcome() {
  return (<>
  <div id="main">
    <div id="wrapper">
    <Navbar/>
    <Card
    name= "COME ON IN, User"
    message= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sapien porttitor, lacinia leo vel, iaculis ipsum. Curabitur ligula justo, pretium nec mi aliquet, suscipit placerat elit. Curabitur ac neque id elit lobortis efficitur. Donec auctor justo leo, eget ullamcorper ex placerat a. Suspendisse lacus leo, vulputate eu viverra vulputate, pulvinar vitae ipsum."
    cornerText="Demo"
    />
    <PepeBackground/>
    </div>
    
  </div>
    </>)
}

export default Welcome;
