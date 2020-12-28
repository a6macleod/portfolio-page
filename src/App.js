import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
// CSS
import "./App.css";
// Images for example projects
import brickWall from "./images/brick-wall.png";

function App() {
  const [exampleProjects, setExampleProjects] = useState([
    {
      title: "Shopping Cart",
      goal: "The goal of this site was to create a shopping cart using React",
      type: "This was a learning project for React",
      tech: "Javascript, React",
      link: "https://a6macleod.github.io/react_shopping_cart/",
      img: brickWall,
      imgAlt:
        "Screenshot of fictional brick walls for sale from the Shopping Cart project",
    },
  ]);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/">
            <AboutMe exampleProjects={exampleProjects} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
