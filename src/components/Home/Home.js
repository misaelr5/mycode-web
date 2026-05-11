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
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Propuesta web privada
              </h1>

              <h1 className="heading-name">
                SOMOS
                <strong className="main-name"> MyCode </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <p className="home-hero-copy">
                  Creamos soluciones digitales a medida para vender mejor,
                  organizar mejor y comunicar mejor.
                </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className="hero-brand-panel" aria-label="MyCode Web Studio visual">
                <div className="hero-panel-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="hero-panel-body">
                  <p className="hero-panel-kicker">MyCode Web Studio</p>
                  <h2>Diseno, estructura y criterio tecnico.</h2>
                  <div className="hero-panel-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
