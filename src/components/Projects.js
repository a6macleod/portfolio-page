const Projects = (props) => {
  return (
    <div className="projects">
      {props.exampleProjects.map((project) => {
        return (
          <div key={project.title} className="project">
            <div className="imgContainer">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-hidden="true"
                role="presentation"
              >
                <img src={project.img} alt={project.imgAlt} />
              </a>
            </div>
            <div className="projectInfo">
              <h2>{project.title}</h2>
              <p>{project.goal}</p>
              <p>{project.tech}</p>
              <div className="links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Check out the site
                  <i className="far fa-share-square"></i>
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  See the code
                  <i
                    className="far fa-share-square"
                    aria-hidden="true"
                    role="presentation"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
