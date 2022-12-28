import React from "react";
import { NavLink } from "./NavbarElements";
import "./Navbar.css"

function Navbar() {
    const twitter = require("../../assets/images/Twitter.png");
    const discord = require("../../assets/images/Discord.png");
    const whitepaper = require("../../assets/images/Whitepaper.png");

  return (<>
        <nav id="navbar">
            <div id="main-navbar">
                <div className="items">
                    <NavLink id="twitter" to="/twitter"><img src={twitter} alt="Twitter"/></NavLink>
                </div >
                <div className="items">
                    <NavLink id="discord" to="/discord"><img src={discord} alt="Discord"/></NavLink>
                </div>
                <div className="items">
                    <NavLink id="whitepaper" to="/whitepaper"><img src={whitepaper} alt="Whitepaper"/></NavLink>
                </div>
            </div>
            {/* <div id="token">
                <strong>100</strong>
            </div> */}
            <div id="wallet">
                <span>0x5b1A885</span>
            </div>
        </nav>
    </>);
}

export default Navbar;
