import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaBootstrap, FaNodeJs } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            ¡Hola! Soy <strong>Juan</strong>, desarrollador frontend junior con pasión por crear interfaces limpias, rápidas y modernas.
            Me motiva transformar ideas en experiencias visuales efectivas y accesibles.
          </p>
          <p>
            Trabajo con <strong>HTML</strong>, <strong>CSS/Sass</strong>, <strong>JavaScript</strong> y <strong>React</strong>.
            Estoy en constante aprendizaje, perfeccionando mis conocimientos en frameworks, buenas prácticas y optimización del rendimiento web.
          </p>
          <p>
            Busco incorporarme a un equipo donde pueda seguir creciendo profesionalmente y aportar con entusiasmo, responsabilidad y trabajo colaborativo.
          </p>
          <a href="/CV-JuanPabloVignolles.pdf" target="_blank" className="btn">Descargar CV</a>
        </div>
      </div>

      {/* Nueva fila de "cards" debajo del texto principal */}
      <div className="about-extra">
        <div className="about-card">
          <h3>Tecnologías</h3>
          <ul className="tech-list">
            <li><FaHtml5 className="tech-icon html" /> HTML - Avanzado</li>
            <li><FaCss3Alt className="tech-icon css" /> CSS / Sass - Avanzado</li>
            <li><FaJs className="tech-icon js" /> JavaScript - Moderado</li>
            <li><FaReact className="tech-icon react" /> React js - Moderado</li>
            <li><FaGitAlt className="tech-icon git" /> Git / GitHub - Moderado</li>
            <li><FaBootstrap className="tech-icon bootstrap" /> Bootstrap - Moderado</li>
            <li><FaNodeJs className="tech-icon node" /> Node js - Básico</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Conocimientos de Programación</h3>
          <ul>
            <li>Inglés — Avanzado (C1)</li>
            <li>Responsive Design avanzado (Mobile First, accesibilidad)</li>
            <li>Diseño UI/UX básico (Figma, prototipado, wireframes)</li>
            <li>Uso de APIs REST</li>
            <li>Uso de terminal / línea de comandos</li>
            <li>Integración con backend (fetch/axios)</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Adicionales</h3>
          <ul>
            <li>Aprendizaje autónomo</li>
            <li>Gestión del tiempo y productividad</li>
            <li>Comunicación efectiva</li>
            <li>Adaptabilidad</li>
            <li>Aprendizaje continuo</li>
            <li>Colaboración y trabajo remoto</li>
            <li>Adaptabilidad a nuevas tecnologías</li>
          </ul>
        </div>
      </div>
    </section>
  );
}



