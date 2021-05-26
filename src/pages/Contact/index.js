import React from "react";

function Contact() {
  document.title = "Contact Ian";
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Connect with Ian</h5>
        <div class="card-text ml-5 mt-5 mb-5">
          <p className="mb2"><a href="https://github.com/iandarland"><i className="fab fa-github"></i> @iandarland</a><br/></p>
          <p className="mb2"><a href="https://www.linkedin.com/in/ian-darland-450369a0/"><i class="fab fa-linkedin"></i> @iandarland</a><br/></p>
          <p className="mb2"><a href = "mailto: abc@example.com"><i class="fas fa-envelope-open-text"></i>  Email Ian</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
