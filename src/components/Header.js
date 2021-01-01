import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="titleContainer">
        <Link to="/about">
          <h1>Andrew MacLeod</h1>
          <h2>Web Developer</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
