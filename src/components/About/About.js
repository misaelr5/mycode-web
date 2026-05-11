import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Nuestro <strong className="purple">Enfoque</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="enfoque MyCode" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Stack y <strong className="purple">tecnologia </strong>
        </h1>
        <p className="section-subcopy">
          Elegimos la tecnologia segun el proyecto: sitios rapidos, paneles
          administrables, apps web, bases de datos, autenticacion,
          integraciones y despliegues en la nube.
        </p>

        <Techstack />

        <h1 className="project-heading">
          Resultado <strong className="purple">esperado</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
