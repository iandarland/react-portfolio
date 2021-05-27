import {React, useState} from "react";
import Projects from "../../projects.json"
import ProjectCard from "../../components/ProjectCard"
import ProjectDetail from "../../components/ProjectDetail";
import "./style.css"

// const [project, setProject] = useState()


function Portfolio () {
    document.title = "Ian's Portfolio"

    const projectList = Projects

    const [project, setProject] = useState()

    const handleBtnClick = (e) => {
        const projSelect = e.target.id
        console.log(projSelect)
        const selected = projectList.filter(item => item.name === projSelect)
        setProject(selected)
    }

    console.log(project)


    return(
        <div className= "backstyle">
        <div className="card kitten d-flex">
            <div className="d-flex mt-3 card-columns justify-content-center">
            {projectList.map(item => (
                <ProjectCard 
                handleBtnClick = {handleBtnClick}
                key = {item.id}
                id = {item.id}
                image= {item.image}
                name= {item.name}
                />
            ))}
            </div>
            {!project ? (
                <h3 className="text-center mt-3">Click to Learn More About My Projects</h3>
            ) : (
                <ProjectDetail
                name = {project[0].name}
                image = {project[0].image}
                links = {project[0].links}
                description = {project[0].description}
                tech = {project[0].tech} 
                />
            )}
        </div>
        </div>
    )
}

export default Portfolio