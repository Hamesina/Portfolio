import React from "react";
import image1 from "./img/about1.jpg"
import image2 from "./img/quote.jpg"
const Navbar = () => {
    return(
        <section classname = "about-page" id="about">
             <div className = "about">
             <div className = "banner-image">
            <img src = {image1} alt="about-image"></img>
        </div>
        <div className = "banner-content">
            <h3 className = "introduction">About me</h3>
            <p className = "paragraph">I am a highly motivated and detail-oriented individual with a passion for 
            coding and technology. As a beginner web developer, I have experience in HTML, CSS, JavaScript
             and recently React. I have already created some personal projects that showcase my skills, 
            including a simple website for school,and I plan on to expand my knowledge through projects with other programming languages such as Pyhton. I aim to create fast, responsive, 
            and highly available applications that can meet the needs of clients and customers alike. 
            I'm always excited to take on new challenges
             and work collaboratively with others to achieve success.
            </p>
            
        </div>
        
       </div>
       <div className = "sneak">

        <div className = "banner-content">
            <h3 className = "introduction">Sneak a peek </h3>
            <p className = "paragraph">Let's take a peek at one of my favorite quotes. 
            It adresses self doubt, and infers that it is usually not our lack of preparaion that is holding us 
            back, it is our own fear of failure and pursuit of perfection. 
            </p>
            
        </div>
        <div className = "banner-image">
            <img src = {image2} alt="banner-"></img>
        </div>
       </div>
       
        </section>
    )
}
export default Navbar;