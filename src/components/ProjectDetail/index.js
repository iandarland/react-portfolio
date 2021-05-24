import React from "react";

function ProjectDetail(props) {
  return (
    <div class="card mb-3" style={{width: "540px"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={props.image} alt={props.name} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Description: {props.description}
            </p>
            <p class="card-text">
                Technologies Used: {props.tech}
            </p>
            <p class="card-text">
              <a href= {props.links.gitHub}>GitHub Repo</a>
              <a href= {props.links.deployed}>Depoloyed site</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
