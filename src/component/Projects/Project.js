import React from "react"
const Project = (props) => {
    const {img, desc} = props.item;
    return(
        <div className = "project-container">
            <img src = {img} alt=""></img>
            <div className="project-desc">
               <h1>Description</h1>
               <p> {desc}
                </p>
            </div>
        </div>
    )
}
export default Project