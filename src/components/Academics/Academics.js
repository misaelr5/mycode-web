import React from "react";
import "./Academics.css";
import Particle from "../Particle";

const methodData = [
  {
    title: "1. Relevamiento",
    institution: "Diagnostico del cliente",
    duration: "Objetivo, publico y resultado esperado",
    details: [
      "Entendemos el negocio, referencias y problemas actuales.",
      "Definimos que accion concreta debe facilitar la web o sistema.",
    ],
  },
  {
    title: "2. Propuesta de camino",
    institution: "Alcance y prioridad",
    duration: "Que conviene construir primero",
    details: [
      "Recomendamos stack, modulos, pantallas y tipo de experiencia.",
      "Ordenamos el proyecto por fases para evitar complejidad innecesaria.",
    ],
  },
  {
    title: "3. Diseno y arquitectura",
    institution: "Estructura visual y tecnica",
    duration: "Secciones, contenido, navegacion y base del sistema",
    details: [
      "Definimos componentes principales y flujo de usuario.",
      "Preparamos una base que pueda crecer si el negocio lo necesita.",
    ],
  },
  {
    title: "4. Desarrollo",
    institution: "Construccion por avances",
    duration: "Web, app o modulo revisable",
    details: [
      "Trabajamos con avances visibles para ajustar a tiempo.",
      "Priorizamos rendimiento, usabilidad, escalabilidad y mantenimiento.",
    ],
  },
  {
    title: "5. Revision y ajustes",
    institution: "Pulido final",
    duration: "Responsive, textos, interacciones y performance",
    details: [
      "Probamos, corregimos y refinamos detalles visuales.",
      "Ajustamos llamados a la accion segun el canal que convenga.",
    ],
  },
  {
    title: "6. Entrega y acompanamiento",
    institution: "Publicacion y evolucion",
    duration: "Listo para uso y proximas mejoras",
    details: [
      "Publicamos en el dominio y hosting acordado.",
      "Definimos mantenimiento, mejoras o nuevos modulos si corresponde.",
    ],
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">Metodo de trabajo</h1>
      <div className="academics-grid">
        {methodData.map((step, index) => (
          <div key={index} className="academic-card">
            <h2>{step.title}</h2>
            <h3>{step.institution}</h3>
            <p className="academic-duration">{step.duration}</p>
            <ul>
              {step.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
