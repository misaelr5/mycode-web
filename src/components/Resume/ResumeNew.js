import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineArrowRight } from "react-icons/ai";

const proposals = [
  {
    name: "Opcion 1: Presencia inicial",
    ideal: "Ideal para quien necesita salir rapido con una web clara, profesional y enfocada.",
    items: [
      "Landing page o sitio inicial",
      "Estructura responsive",
      "Secciones principales de presentacion",
      "Copy orientado a conversion",
      "CTA claro: WhatsApp, correo, formulario, agenda o canal preferido",
      "Formulario o canal de contacto",
      "Publicacion en dominio/hosting acordado",
    ],
    result:
      "Sirve para validar una idea, ordenar la presencia digital y empezar a recibir consultas sin desarrollar una plataforma compleja desde el inicio.",
  },
  {
    name: "Opcion 2: Web estrategica",
    ideal: "Ideal para marcas, profesionales o negocios que necesitan una web mas completa y pensada para crecer.",
    items: [
      "Sitio institucional o comercial",
      "Arquitectura de informacion completa",
      "Diseno visual mas trabajado",
      "Secciones de servicios, casos, beneficios y contacto",
      "Integraciones esenciales",
      "Optimizacion responsive",
      "Base preparada para escalar",
    ],
    result:
      "Sirve para comunicar mejor, generar confianza, mostrar una oferta mas solida y convertir visitas en oportunidades reales.",
  },
  {
    name: "Opcion 3: Sistema a medida",
    ideal: "Ideal para clientes que necesitan resolver una operacion, ordenar procesos o crear una herramienta propia.",
    items: [
      "App web o panel privado",
      "Login y roles si corresponde",
      "Gestion de datos",
      "Modulos personalizados",
      "Dashboard o vistas internas",
      "Base de datos",
      "Integraciones y evolucion por fases",
    ],
    result:
      "Sirve para transformar procesos manuales en una herramienta digital propia, ahorrar tiempo y tener mas control sobre la informacion del negocio.",
  },
];

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <h1 className="project-heading">
              Tres propuestas de <strong className="purple">avance</strong>
            </h1>
            <p className="section-subcopy">
              Usamos la opcion 3 como horizonte, no como obligacion: se puede
              empezar simple y escalar por fases segun el proyecto.
            </p>
          </Row>

          <Row className="proposal-grid">
            {proposals.map((proposal) => (
              <Col md={4} className="proposal-card-col" key={proposal.name}>
                <Card className="project-card-view proposal-card">
                  <Card.Body>
                    <Card.Title>{proposal.name}</Card.Title>
                    <Card.Text>{proposal.ideal}</Card.Text>
                    <ul>
                      {proposal.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <p className="proposal-result">{proposal.result}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href="/contact"
              style={{ maxWidth: "260px" }}
            >
              Definir siguiente paso <AiOutlineArrowRight />
            </Button>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
