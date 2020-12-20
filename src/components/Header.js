import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="projects">
      <div className="titleContainer">
        <Link to="/">
          <h1>Andrew MacLeod</h1>
          <h2>Web Developer</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
