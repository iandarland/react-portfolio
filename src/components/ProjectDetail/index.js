import React from "react";
import "./style.css"

function ProjectDetail(props) {
  return (
    <div className="card mb-3 m-1" style={{color:"black"}} >
          <img className="card-img-top" src={props.image} alt={props.name} />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Description: {props.description}
            </p>
            <p className="card-text">
                Technologies Used: {props.tech.join(", ")}
            </p>
              <a href= {props.links.gitHub} className="detail-link">GitHub Repo</a><br/>
              <a href= {props.links.deployed} className="detail-link">Depoloyed site</a>
          </div>
    </div>
  );
}

export default ProjectDetail;
