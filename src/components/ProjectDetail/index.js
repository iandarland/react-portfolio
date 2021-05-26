import React from "react";

function ProjectDetail(props) {
  return (
    <div className="card mb-3 m-1" >
          <img className="card-img-top" src={props.image} alt={props.name} />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Description: {props.description}
            </p>
            <p className="card-text">
                Technologies Used: {props.tech.join(", ")}
            </p>
              <a href= {props.links.gitHub}>GitHub Repo</a><br/>
              <a href= {props.links.deployed}>Depoloyed site</a>
          </div>
    </div>
  );
}

export default ProjectDetail;
