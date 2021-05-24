import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer font-small" bg="dark" variant="dark">
      <div className="container text-center py-3">
        © Ian Darland { new Date().getFullYear() }
      </div>
    </footer>
  );
}

export default Footer;
