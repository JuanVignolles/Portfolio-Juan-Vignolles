export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Aromática Fragancias",
      description:
        "E-commerce frontend para la venta de velas aromáticas. Desarrollado con React, Sass y LocalStorage.",
      image: "/public/img/proyect1-bg.jpg", 
      github: "https://github.com/JuanVignolles/AromaticaFragancias",
      demo: "https://aromaticas.netlify.app/"
    },
    /* {
      id: 2,
      title: "Shadow World",
      description:
        "Website frontend oficial para un juego MMORPG ficticio, orientado al logeo, información y consulta. Desarrollado con React, Tailwind y LocalStorage",
      image: "/public/img/proyect2-jpg",
      github: "",
      demo: ""
    } */

  ];

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Web
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
