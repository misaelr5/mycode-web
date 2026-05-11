import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Tipos de <strong className="purple">Soluciones Web </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ordenamos cada servicio segun escenarios reales, no como una lista
          fija de precios.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Landing pages"
              description="Paginas enfocadas en una accion concreta: captar consultas, presentar un servicio, validar una idea, lanzar una campana o vender una oferta especifica."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Sitios institucionales"
              description="Webs para presentar una marca, empresa, comercio o profesional con inicio, servicios, trabajos, confianza, contacto y llamados a la accion."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Websites comerciales"
              description="Sitios pensados para convertir visitas en oportunidades reales combinando estrategia, diseno, copy, arquitectura de informacion y desarrollo."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Apps web"
              description="Aplicaciones accesibles desde navegador para paneles internos, sistemas de gestion, portales privados, dashboards, CRM livianos o herramientas operativas."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Prestaciones web"
              description="Funcionalidades puntuales para una web existente: formularios avanzados, integraciones, automatizaciones, paneles, reservas, cotizadores, filtros o bases de datos."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Modulos personalizados"
              description="Bloques hechos a medida para gestion de clientes, seguimiento de ventas, contenido, productos, control interno, reportes o automatizaciones."
              link="/resume"
              buttonLabel="Ver propuestas"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
