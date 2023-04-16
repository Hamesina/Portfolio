import React from "react";
import "../App.css";
import myImage from "./img/svg.svg"
import {IoLogoJavascript} from "react-icons/io"
import {FaPhp,FaLinkedin, FaGithub,FaPython,FaHtml5,FaCss3Alt} from "react-icons/fa"
const Home = () => {
    return(
       <section className="home" id="home">
       <div className = "banner" id="banner">
        <div className = "banner-content" id="banner-content">
            <h1 className = "welcome">Welcome to my portfolio</h1>
            <h3 className = "introduction">Hello my name is Hammasii </h3>
            <p className = "paragraph"> I am a developer at the beginning of her journey. 
            It is a delight to present to you my projects.  
            Thank you for taking the time to explore my work, and I hope you'll find it as meaningful as I do.
            </p>
            <div className="button-home">
            <a href ="https://github.com/Hamesina" target = "_blank" rel="noreferrer"> <FaGithub color = "black"/></a>
            <a href="https://www.linkedin.com/in/hammasii-bula-768500249" target = "_blank" rel="noreferrer"> <FaLinkedin color="blue"/></a> 
            </div>
            <div className = "tech-stack">
            <span className = "tech-">Tech Stack ||</span>
            <p>
            <button className = "tech"> <FaHtml5 color="orange"/></button>
            <button className = "tech"> <FaCss3Alt color = "blue"/></button>
            <button className = "tech"> <IoLogoJavascript color="#B2560D" /></button> 
            <button className = "tech"> <FaPython color = "darkblue"/></button>  
            <button className = "tech"> <FaPhp color = "red"/></button>   
            </p>
            </div>
        </div>
        <div className = "banner-image">
            <img src = {myImage} alt="banner-" ></img>
        </div>
       </div>
       </section>
      
    )
}
export default Home