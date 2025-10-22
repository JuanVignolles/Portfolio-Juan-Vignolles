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
          <a href="/public/CV -Juan Pablo Vignolles.pdf" target="_blank" className="btn">Descargar CV</a>

        </div>
      </div>

      {/* Nueva fila de "cards" debajo del texto principal */}
      <div className="about-extra">
        <div className="about-card">
          <h3>Tecnologías</h3>
          <ul>
            <li>HTML - Avanzado</li>
            <li>CSS / Sass - Avanzado</li>
            <li>JavaScript - Moderado</li>
            <li>React js - Moderado</li>
            <li>Git / GitHub - Moderado</li>
            <li>Bootstrap - Moderado</li>
            <li>Node js - Basico</li>
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
            <li>Inglés — Avanzado (C1)</li>
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


