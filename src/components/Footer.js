import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by MyCode</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright {year} MyCode</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:hola@mycode.studio"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                aria-label="Correo MyCode"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="/contact"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                aria-label="WhatsApp MyCode"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
