import React, {useState} from "react";

import "./navbar.css"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

const Navbar = () => {

    const [Mobile, setMobile] = useState(false);

    return(
        <nav className = 'navbar'>
            
                <h3 className="logo"><span className = "lblue">portfolio</span>.ham</h3>
                <ul className = {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)} >
                    <li><a href = "#home"> Home</a></li>
                    <li> <a href = "#about">About </a></li>
                    <li> <a href = "#projects"> Projects</a></li>
                    <li> <a href = "#contact">Contact </a></li>
                </ul>
                <button className="mobile-bars" onClick={() => setMobile(!Mobile)}
                >
                    {Mobile? <ImCross/> : <FaBars/>}
                </button>
            
        </nav>
    )
}
export default Navbar;