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
          <p className="mb2"><a href="https://www.linkedin.com/in/ian-darland-450369a0/"><i class="fab fa-linkedin"></i> @iandarland</a><br/></p>
          <p className="mb2"><a href = "mailto: ianpdarland@gmail.com"><i class="fas fa-envelope-open-text"></i>  Email Ian</a></p>
        </div>
      </div>
  </div>
  );
}

export default Contact;
