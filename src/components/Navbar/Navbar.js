import React from "react";
import { NavLink } from "./NavbarElements";
import "./Navbar.css"

function Navbar({token, wallet}) {
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
            <div className="info">
                <div id="token-image"></div>
                <span>{token}</span>
            </div>
            <div className="info">
                <span>{wallet}</span>
            </div>
            </div>
        </nav>
    </>);
}

export default Navbar;
