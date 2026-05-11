import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              QUE PUEDE RESOLVER <span className="purple"> MyCode </span>
            </h1>
            <p className="home-about-body">
              MyCode es un web studio enfocado en crear soluciones digitales a
              medida: websites, landing pages, sistemas internos, apps web,
              prestaciones especificas y modulos personalizados.
              <br />
              <br />
              No trabajamos con una unica receta. Elegimos el stack, la
              arquitectura, el diseno y el nivel de complejidad segun las
              necesidades reales de cada cliente, su etapa actual y el objetivo
              del proyecto.
              <br />
              <br />
              Nos involucramos con el crecimiento del cliente. La idea no es
              solo entregar una web:
              <i>
                <b className="purple">
                  {" "}
                  construimos una herramienta para vender, ordenar y comunicar
                  mejor.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="MyCode avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SIGUIENTE PASO</h1>
            <p>
              Podemos empezar con una web clara, escalarla con prestaciones
              especificas y convertirla en una app o sistema a medida cuando el
              proyecto lo necesite.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="/contact"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Contacto por correo"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/contact"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Contacto comercial"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
