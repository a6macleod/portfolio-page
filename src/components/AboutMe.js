import Projects from "./Projects";
import { Link } from "react-router-dom";
import headshot from "../images/headshot-2020-compressed.png";

const AboutMe = (props) => {
  return (
    <div className="aboutMeContainer">
      <div className="aboutSection">
        <div className="imageContainer">
          <img src={headshot} alt="A nice headshot of Andrew" />
        </div>
        <div className="aboutMe">
          <h2>About Me</h2>
          <p>
            I am a web developer based out of Kalamazoo Michigan. I am available
            to build your websites, solve your website problems, and help meet
            your business goals online.
          </p>
          <p>
            I am particularly interested in helping small businesses and
            non-profits have a professional web presence especially on mobile
            devices.
          </p>
        </div>
      </div>
      {/* Example Projects */}
      <Projects exampleProjects={props.exampleProjects} />
      <div className="contactButtonContainer">
        <Link to="/contact">
          <button className="contactButton">Drop me a line!</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
