const Projects = (props) => {
  return (
    <div className="projects">
      <h2>Projects page section</h2>
      {props.exampleProjects.map((project) => {
        return (
          <div className="project">
            <img src={project.img} alt={project.imgAlt} />
            <h2>{project.title}</h2>
            <p>{project.goal}</p>
            <p>{project.type}</p>
            <p>{project.tech}</p>
            <a href={project.link} target="_blank">
              Check it out
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
