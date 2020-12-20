import Projects from "./Projects";
import headshot from "../images/headshot-2020.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="aboutSection">
        <div className="imageContainer">
          <img src={headshot} alt="A nice headshot of Andrew" />
        </div>
        <div className="about">
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
      <Projects />
    </div>
  );
};

export default AboutMe;
