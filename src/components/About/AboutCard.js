import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Antes de proponer una web, MyCode ordena el diagnostico del cliente:
            que necesita comunicar, a quien le habla, que objeciones debe
            resolver y que accion queremos que tome la persona que entra.
            <br />
            <br />
            Cada proyecto se piensa desde tres lugares al mismo tiempo:
            <span className="purple"> marketing, diseno y arquitectura.</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Marketing para convertir visitas en oportunidades.
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseno visual claro, moderno y alineado a la marca.
            </li>
            <li className="about-activity">
              <ImPointRight /> Arquitectura preparada para crecer por fases.
            </li>
            <li className="about-activity">
              <ImPointRight /> Desarrollo enfocado en rendimiento y mantenimiento.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "No entregamos solamente una web linda: construimos una herramienta
            util para el crecimiento del cliente."
          </p>
          <footer className="blockquote-footer">MyCode</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
