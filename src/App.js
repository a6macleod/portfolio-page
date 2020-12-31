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
import memory from "./images/memory.png";
import responsive from "./images/responsive.png";

function App() {
  const [exampleProjects, setExampleProjects] = useState([
    {
      title: "Shopping Cart Project",
      goal:
        "The goal of this site was some fun practice to create a shopping cart using React. Site includes a splash page, a shopping page, a checkout page, and a dynamically created page for each of the store items.",
      tech:
        "The tech used was mostly Javascript and React and the site is hosted on Github Pages.",
      link: "https://a6macleod.github.io/react_shopping_cart/",
      code: "https://github.com/a6macleod/react_shopping_cart",
      img: brickWall,
      imgAlt:
        "Screenshot of fictional brick walls for sale from the Shopping Cart project",
    },
    {
      title: "Memory Game Project",
      goal:
        "The goal of this project was to create a memory game using React. The images all change position each time one is clicked. Your score is tracked and if you click the same image twice, the score resets and your top score is recorded.",
      tech:
        "The tech used was mostly Javascript and React and the site is hosted on Github Pages.",
      link: "https://a6macleod.github.io/memory-game/",
      code: "https://github.com/a6macleod/memory-game",
      img: memory,
      imgAlt:
        "Screenshot of the memory game the images are of various small metal gears.",
    },
    {
      title: "Responsive Design Project",
      goal:
        "The goal of this project was to create a duplicate of TheNextWeb.com and replicate their responsive design. This was great practice making elements disapear, re-arrange, and introduce a hamburger menu. ",
      tech:
        "The tech used was just HTML and CSS. The site is hosted on Github Pages.",
      link: "https://a6macleod.github.io/responsive-design/#",
      code: "https://github.com/a6macleod/responsive-design",
      img: responsive,
      imgAlt:
        "Screenshot of the responsive design project that duplicated The Next Webs website.",
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
