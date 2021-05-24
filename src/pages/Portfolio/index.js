import {React, useState} from "react";
import Projects from "../../projects.json"
import ProjectCard from "../../components/ProjectCard"
import ProjectDetail from "../../components/ProjectDetail";

// const [project, setProject] = useState()


function Portfolio () {
    document.title = "Ian's Portfolio"

    const projectList = Projects

    const [project, setProject] = useState()

    const handleBtnClick = (value) => {
        // const value = e.target.attributes.id
        console.log(value)
        const selected = projectList.filter(item => (item.id = value))
        console.log(selected)
        setProject(selected)
    }


    return(
        <div>
            {projectList.map(item => (
                <ProjectCard 
                handleBtnClick = {handleBtnClick}
                key = {item.id}
                image= {item.image}
                name= {item.name}
                />
            ))}
            {!project ? (
                <h3>Click to Learn More About My Projects</h3>
            ) : (
                <ProjectDetail
                name = {project.name}
                image = {project.image}
                links = {project.links}
                description = {project.description}
                tech = {project.tech} 
                />
            )}
        </div>
    )
}

export default Portfolio