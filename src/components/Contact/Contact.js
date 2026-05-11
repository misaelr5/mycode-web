import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="get-in-touch">
        <h2 className="title">
          Cierre y <span className="gradient-text">siguiente paso</span>
        </h2>
        <div className="underline"></div>

        <p className="subtitle">
          En MyCode no buscamos entregar solamente una web linda.
          <br />
          Buscamos construir una herramienta util para el crecimiento del cliente.
        </p>
      </div>

      <div className="contact-form-box">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre o empresa"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="nombre@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Mensaje</label>
            <textarea
              name="message"
              placeholder="Contanos que queres construir, mejorar u ordenar."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar consulta
          </button>
          {submitted && (
            <p className="form-status">
              Consulta registrada. El proximo paso es conectar este formulario
              con el canal elegido.
            </p>
          )}
        </form>
      </div>

      <p className="direct-contact-text">Tambien podemos priorizar el canal que prefiera el cliente:</p>

      <div className="social-links">
        <a href="mailto:hola@mycode.studio" className="social-button">
          <FaEnvelope size={24} /> Correo
        </a>
        <a href="/contact" className="social-button">
          <FaWhatsapp size={24} /> WhatsApp
        </a>
      </div>

      <div className="footer">
        <button className="star-repo-button" onClick={() => window.scrollTo(0, 0)}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Contact;
