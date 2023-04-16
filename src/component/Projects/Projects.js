import React from "react";
import image1 from "../img/portfolio.png"
import Slider from "./Slider"
import {IoLogoJavascript} from "react-icons/io"
import {SiMysql} from "react-icons/si"
import {FaPhp,FaBootstrap, FaGithub,FaReact,FaHtml5,FaCss3Alt} from "react-icons/fa"
const Projects = () => {
    return(
        <section classname = "projects-page" id="projects">
             <div className = "projects">
        <div className = "banner-content" id="banner-content">
            <h1 className = "welcome">Projects</h1>
            <h3 className = "introduction"> A School Website </h3>
            <p>
            <span className = "tech-stack"> 
            <button className = "tech"> <FaHtml5 color="orange"/></button>
            <button className = "tech"> <FaCss3Alt color = "blue"/></button>
            <button className = "tech"> <IoLogoJavascript color="#B2560D" /></button> 
            <button className = "tech"> <FaBootstrap color = "navy"/></button>  
            <button className = "tech"> <FaPhp color = "red"/></button>  
            <button className = "tech"> <SiMysql size = {17}/></button> 
            </span>
 
            </p>
            <p className = "paragraph">A simple school website project for a STEM based high school with both front-end and backend functionality 
            It allow students to access their grades, view their profiles, and access their resources. 
            Additionally, teachers would have the ability to view their profiles, classes they teach,
            and grades. The back-end of the website would store all relevant data, and it is designed in a way 
            that admins, teachers and students have access to the information they need. The front-end of the website 
            would have an easy-to-use interface that gives away a simple information of the website.The school website project also features
             responsive design, optimized for modern web browsers and devices.<br></br>
            <a className = "source-code" href ="https://github.com/Hamesina/Simple-school-website" target = "_blank " rel="noreferrer"> <FaGithub size = {17} color = "black"/>Source code</a>
            </p>
            
            
           
        </div>
       </div>
       <Slider/>
       <div className = "about">
             <div className = "banner-image">
            <img className="portfolio-image" src = {image1} alt="banner-"></img>
        </div>
        <div className = "banner-content">
            <h3 className = "introduction">Personal Portfolio</h3>
            <p>
            <span className = "tech-stack"> 
            <button className = "tech"> <FaReact color="darkblue"/></button>
            <button className = "tech"> <FaCss3Alt color = "blue"/></button>
            <button className = "tech"> <IoLogoJavascript color="#B2560D" /></button> 
            </span>
            </p>
            <p className = "paragraph">
            A clean, simple structured and responsive portfolio.
            Through this portfolio, am excited to show my progress as I keep learning and improving.
            <br></br>
            <a className = "source-code" href ="https://github.com/Hamesina/Portfolio" target = "_blank " rel="noreferrer" > <FaGithub size = {17} color = "black"/>Source code</a>
            </p>
            
        </div>
        
       </div>
        </section>

    )
}
export default Projects;