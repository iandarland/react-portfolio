import React from "react";
import "./style.css";

function Contact() {
  document.title = "Contact Ian";
  return (
    <div className="card kitten card-body">
      <div>
        <h5 className="card-title text-center">Connect with Ian</h5>
        <div className="card-text ml-5 mt-5 mb-5">
          <p className="mb2"><a href="https://github.com/iandarland"><i className="fab fa-github"></i> @iandarland</a><br/></p>
          <p className="mb2"><a href="https://www.linkedin.com/in/ian-darland-450369a0/"><i className="fab fa-linkedin"></i> @iandarland</a><br/></p>
          <p className="mb2"><a href = "mailto: ianpdarland@gmail.com"><i className="fas fa-envelope-open-text"></i> ianpdarland@gmail.com</a></p>
          <p className="mb2"><a href ="https://drive.google.com/file/d/1T7uhli9Sqkg-s5XO6WCANYvaottfMsJt/view?usp=sharing"><i className = "fa fa-address-card-o"></i>Resume</a></p>
        </div>
      </div>
  </div>
  );
}

export default Contact;
