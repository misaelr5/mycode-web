import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-hero-row">
            <Col lg={10} xl={9} className="home-header mycode-hero">
              <p className="hero-kicker">Soluciones digitales a medida</p>

              <h1 className="mycode-hero-title">
                <span>MyCode</span>
                <span>Web Studio</span>
              </h1>

              <div className="mycode-typewriter-wrap">
                <Type />
              </div>

              <p className="home-hero-copy">
                Diseño y desarrollo web para negocios que necesitan presencia
                digital real, estructura clara y criterio tecnico.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
