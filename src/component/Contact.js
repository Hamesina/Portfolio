import React from "react";
import {FaInstagram,FaTelegram, FaPhone} from "react-icons/fa"
import {CiMail} from "react-icons/ci"
const Contact = () => {
    return(
        <section classname = "" id = "contact">
            <div className = "banner">
            <div className = "banner-content">
            <h3 className = "introduction">Don't be shy, lets keep in touch</h3>
            <p className = "paragraph">
                Please use the following platforms for any comments or sugestions you have
                <div className="socials">
                <div className = "icons"><a onClick={() => window.location = "https://www.instagram.com/hamesinaa/"}> <FaInstagram color = "purple" /></a>@hamesina</div>
                <div className = "icons"><a onClick={() => window.location = "https://t.me/HTBOC"}> <FaTelegram color = "#086B7D"/></a>@HTBOC</div>
                <div className = "icons"><a onClick={() => window.location = ""}> <FaPhone color = "black"/></a>+251-966-69-94-59</div>
                <div className = "icons"><a onClick={() => window.location = 'mailto:bulahammasii@gmail.com'}> <CiMail/></a>bulahammasii@gmail.com</div>
                </div>
            </p>
        </div>
        <div className = "banner-image"></div>
        </div>
        </section>
    )
}
export default Contact;