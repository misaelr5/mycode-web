import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

const developmentSkills = [
  { title: "Python", subtitle: "Automatizacion y backend", icon: "{}", span: 3 },
  { title: "TypeScript", subtitle: "Tipado estatico", icon: "TS", span: 3 },
  { title: "PHP", subtitle: "Backend development", icon: "</>", span: 3 },
  { title: "React", subtitle: "UI Library", icon: "⚛", span: 3 },
  { title: "HTML", subtitle: "Estructura web", icon: "<>", span: 2 },
  { title: "CSS", subtitle: "Estilos y diseno", icon: "#", span: 2 },
  { title: "Laravel", subtitle: "Framework PHP", icon: "L", span: 2 },
];

const platformSkills = [
  { title: "WordPress", subtitle: "CMS principal", icon: "W", span: 3 },
  { title: "WooCommerce", subtitle: "E-commerce WordPress", icon: "⌂", span: 3 },
  { title: "Prestashop", subtitle: "Tiendas online", icon: "P", span: 3 },
  { title: "Shopify", subtitle: "E-commerce SaaS", icon: "▢", span: 3 },
  { title: "Wix", subtitle: "Web builder", icon: "W", span: 3 },
  { title: "Tailwind", subtitle: "CSS utility-first", icon: "≈", span: 3 },
];

function SkillIcon({ label }) {
  return (
    <svg className="skill-icon-svg" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="5" y="5" width="30" height="30" rx="9" />
      <text x="20" y="24" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}

function SkillCard({ skill, group }) {
  return (
    <article
      className={`skill-bento-card ${group === "platform" ? "is-platform" : ""}`}
      style={{ gridColumn: `span ${skill.span}` }}
    >
      <SkillIcon label={skill.icon} />
      <div>
        <h3>{skill.title}</h3>
        <p>{skill.subtitle}</p>
      </div>
    </article>
  );
}

const solutions = [
  {
    title: "Landing pages",
    copy: "Paginas enfocadas en una accion concreta: captar consultas, presentar un servicio, validar una idea o vender una oferta especifica.",
  },
  {
    title: "Webs institucionales",
    copy: "Sitios para presentar marca, servicios, trabajos, confianza y contacto con una estructura clara y profesional.",
  },
  {
    title: "Apps web",
    copy: "Paneles internos, portales privados, dashboards, CRM livianos y herramientas operativas accesibles desde navegador.",
  },
  {
    title: "Modulos personalizados",
    copy: "Bloques a medida para gestion de clientes, ventas, contenido, productos, reportes, reservas o automatizaciones.",
  },
];

const method = [
  "Relevamiento",
  "Propuesta de camino",
  "Diseno y arquitectura",
  "Desarrollo",
  "Revision y ajustes",
  "Entrega y acompanamiento",
];

const proposals = [
  {
    title: "Presencia inicial",
    copy: "Para salir rapido con una web clara, responsive y orientada a recibir consultas.",
  },
  {
    title: "Web estrategica",
    copy: "Para marcas que necesitan comunicar mejor, generar confianza y preparar una base escalable.",
  },
  {
    title: "Sistema a medida",
    copy: "Para ordenar procesos, centralizar datos y construir una herramienta propia por fases.",
  },
];

function Home() {
  return (
    <main>
      <section className="landing-section home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-hero-row align-items-center">
            <Col lg={7} className="home-header mycode-hero">
              <p className="hero-kicker">Soluciones digitales a medida</p>

              <h1 className="mycode-hero-title">
                <span>MyCode</span>
                <span>Web Studio</span>
              </h1>

              <div className="mycode-typewriter-wrap">
                <Type />
              </div>

              <p className="home-hero-copy">
                Diseno y desarrollo web para negocios que necesitan presencia
                digital real, estructura clara y criterio tecnico.
              </p>
            </Col>

            <Col lg={5} className="hero-stack-column">
              <aside className="stack-preview-panel" aria-label="Preview de stack tecnologico">
                <div className="stack-panel-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p className="panel-eyebrow">Skills preview</p>
                <h2>Desarrollo, CMS y plataformas.</h2>
                <div className="skill-bento-grid" aria-label="Skills de desarrollo">
                  {developmentSkills.map((skill) => (
                    <SkillCard key={skill.title} skill={skill} group="development" />
                  ))}
                </div>
                <div className="skill-bento-separator" aria-hidden="true" />
                <div className="skill-bento-grid" aria-label="Skills de CMS y plataformas">
                  {platformSkills.map((skill) => (
                    <SkillCard key={skill.title} skill={skill} group="platform" />
                  ))}
                </div>
                <p className="panel-caption">
                  Preview compacto del stack que usamos para sitios, tiendas y sistemas.
                </p>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="landing-section" id="enfoque">
        <Container>
          <Row className="landing-two-col">
            <Col lg={5}>
              <p className="section-kicker">Enfoque</p>
              <h2 className="landing-title">Marketing, diseno y arquitectura en una misma decision.</h2>
            </Col>
            <Col lg={7}>
              <p className="landing-copy">
                No trabajamos con una unica receta. Elegimos el stack, la
                estructura, el diseno y el nivel de complejidad segun el
                objetivo real del cliente y la etapa actual del proyecto.
              </p>
              <div className="principle-grid">
                <span>Claridad comercial</span>
                <span>Diseno sobrio</span>
                <span>Base escalable</span>
                <span>Performance</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="landing-section" id="soluciones">
        <Container>
          <p className="section-kicker">Soluciones</p>
          <h2 className="landing-title narrow">Creamos herramientas web con alcance claro.</h2>
          <Row className="landing-card-grid">
            {solutions.map((solution) => (
              <Col md={6} lg={3} key={solution.title}>
                <article className="landing-card">
                  <span className="service-badge">MyCode</span>
                  <h3>{solution.title}</h3>
                  <p>{solution.copy}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="landing-section" id="metodo">
        <Container>
          <Row className="landing-two-col">
            <Col lg={5}>
              <p className="section-kicker">Metodo</p>
              <h2 className="landing-title">Un proceso por etapas para avanzar sin sobredimensionar.</h2>
            </Col>
            <Col lg={7}>
              <div className="method-list">
                {method.map((step, index) => (
                  <div className="method-item" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="landing-section" id="propuestas">
        <Container>
          <p className="section-kicker">Propuestas</p>
          <h2 className="landing-title narrow">Podemos empezar simple y escalar por fases.</h2>
          <Row className="landing-card-grid">
            {proposals.map((proposal) => (
              <Col md={4} key={proposal.title}>
                <article className="landing-card proposal-mini-card">
                  <h3>{proposal.title}</h3>
                  <p>{proposal.copy}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="landing-section contact-landing" id="contacto">
        <Container>
          <Row className="landing-two-col align-items-center">
            <Col lg={7}>
              <p className="section-kicker">Siguiente paso</p>
              <h2 className="landing-title">Definamos que conviene construir primero.</h2>
              <p className="landing-copy">
                La idea es partir desde donde esta el cliente hoy: una landing,
                una web mas completa o un sistema a medida por etapas.
              </p>
            </Col>
            <Col lg={5}>
              <div className="contact-action-card">
                <a href="mailto:hola@mycode.studio" className="landing-primary-button">
                  Escribir por correo
                </a>
                <a href="#home" className="landing-ghost-button">
                  Volver al inicio
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
