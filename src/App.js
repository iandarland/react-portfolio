import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  document.title = "Ian Darland";
  return (
    <Router>
      <div className= "origin">
        <Navigation />
        <Wrapper>
          <Container className ="align-content-center mt-4">
            <Row className= "justify-content-center">
              <Col className= "justify-content-center" xl ={9} md= {10} xs= {11}>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
