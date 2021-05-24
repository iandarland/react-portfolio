import React from "react";
import "./style.css";
import { Card, Image } from "react-bootstrap";
import ian from "../../assets/ian.JPG";

function About() {
  document.title = "About Ian";
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body className="justify-content-center">
          <Image className="img-fluid justify-content-md-center w-25" src={ian} alt="card-img" md={1} roundedCircle />
        <Card.Title className="text-center">Ian Darland</Card.Title>
        <Card.Subtitle className="text-center">
          Full Stack Web Developer
        </Card.Subtitle>
        <Card.Text className="m-2 mt-5">
          I am a web development enthusiest and recent graduate of UT Austin's
          full stack web development bootcamp. I am passionate about continually
          building knowledge in different facites of webdevelopment. Currently
          proficient in front end frameworks, building and maintaining
          databases, Javascript, React, Bootstrap, Handlebars, NodeJS, MySQL,
          MongoDB and QA. Open to opportunities that will challange my knowlege
          and improve my skills.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
