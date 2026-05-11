import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaCloud,
  FaLayerGroup,
  FaLock,
  FaPlug,
  FaRocket,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Rapido">
        <FaRocket />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Seguro">
        <FaLock />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Escalable">
        <FaLayerGroup />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Despliegue cloud">
        <FaCloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Medicion">
        <FaChartLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Integraciones">
        <FaPlug />
      </Col>
    </Row>
  );
}

export default Toolstack;
