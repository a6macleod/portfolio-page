import Projects from "./Projects";
import { Link } from "react-router-dom";
import headshot from "../images/headshot-2020.png";

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
            to help solve your website problems and help meet your business
            goals online.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
            Repellendus inventore ipsa facilis labore numquam temporibus unde at
            nisi enim, eum sunt possimus ipsam eveniet tempore alias facere
            dolor deserunt cupiditate.
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
