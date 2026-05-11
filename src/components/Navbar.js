import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineTimeline } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand href="#home" className="d-flex" onClick={closeMenu}>
          <span className="brand-lockup" aria-label="MyCode Web Studio">
            <span className="brand-text">MyCode</span>
            <span className="brand-subtitle">Web Studio</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={closeMenu}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#enfoque" onClick={closeMenu}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Enfoque
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#metodo" onClick={closeMenu}>
                <MdOutlineTimeline style={{ marginBottom: "2px" }} /> Metodo
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#soluciones" onClick={closeMenu}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Soluciones
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#propuestas" onClick={closeMenu}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Propuestas
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#contacto" onClick={closeMenu}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contacto
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button href="#contacto" className="fork-btn-inner" onClick={closeMenu}>
                Siguiente paso
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
