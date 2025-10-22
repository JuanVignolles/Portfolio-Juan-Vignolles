import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send("service_3a6zqzg", "template_sexqlyo", formData, "JVPMDoIJ4ooJDALAE")
      .then(
        () => {
          alert("✅ ¡Mensaje enviado correctamente!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error("Error:", error);
          alert("❌ Hubo un error al enviar el mensaje. Intenta nuevamente.");
          setSending(false);
        }
      );
  };


  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p className="contact-text">
        Si estás buscando un <strong>desarrollador frontend junior</strong> con ganas de aprender, crecer y aportar al equipo, 
        me encantaría conectar.  
        Podés escribirme completando el formulario o contactarme directamente por correo.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje (por ejemplo, detalles del puesto o propuesta)"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn" disabled={sending}> {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
      </form>

      <div className="contact-links">
        <p>O también podés escribirme a:</p>
        <a href="mailto:juampyvignolles@gmail.com" className="contact-email">
          juampyvignolles@gmail.com
        </a>
      </div>
    </section>
  );
}


