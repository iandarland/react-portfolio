import React from "react"
import "./style.css"


function ProjectCard(props){
    return(
        <>
        <div className="card mx-2 mb-2" style={{width: "18rem", color: "black"}}>
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <button onClick={props.handleBtnClick} id={props.name} className="button1">Learn More</button>
            </div>
        </div>
        </>
    )
}

export default ProjectCard