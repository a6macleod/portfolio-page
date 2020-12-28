const Projects = (props) => {
  return (
    <div className="projects">
      <h2>Projects page section</h2>
      <div className="project">
        <img
          src={props.exampleProjects.img}
          alt={props.exampleProjects.imgAlt}
        />
        <h2>{props.exampleProjects.title}</h2>
        <p>{props.exampleProjects.goal}</p>
        <p>{props.exampleProjects.type}</p>
        <p>{props.exampleProjects.tech}</p>
        <a href={props.exampleProjects.link}>Check it out</a>
      </div>
    </div>
  );
};

export default Projects;
