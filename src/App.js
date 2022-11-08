import "./App.css";
import * as React from "react";

const App = () => {
  return (
    <>
      <Header>
        <NavBar></NavBar>
      </Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

const Header = ({ children }) => {
  return (
    <Container>
      <div className="header-wrapper">
        <div className="page-title">
          <h1>Portfolio</h1>
        </div>
        {children}
      </div>
    </Container>
  );
};

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={`nav-menu ${open ? "is-open" : ""}`} id="menu">
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        menu
      </button>
      <div className="menu-dropdown">
        <ul className="submenu">
          <li>
            <a href="/about">About me</a>
          </li>
          <li>
            <a href="/about">Skills</a>
          </li>
          <li>
            <a href="/about">Projects</a>
          </li>
          <li>
            <a href="/about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <Container>
      <div className="hero-wrapper">
        <div className="hero-image"></div>
        <div className="hero-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          tenetur voluptatibus deleniti, optio distinctio id delectus hic
          voluptas obcaecati asperiores quibusdam perspiciatis eveniet,
          consectetur numquam nostrum. Neque quasi consequatur iure?
        </div>
      </div>
    </Container>
  );
};

const About = () => {
  return (
    <Container>
      <div className="about-grid">
        <div className="media">
          <div className="media__img"></div>
          <div className="media__body">
            <h4>start</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            perferendis veniam commodi distinctio impedit at nesciunt error
            dolorem amet. Quasi?
          </div>
        </div>
        <div className="media">
          <div className="media__img"></div>
          <div className="media__body">
            <h4>start</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            perferendis veniam commodi distinctio impedit at nesciunt error
            dolorem amet. Quasi?
          </div>
        </div>
        <div className="media">
          <div className="media__img"></div>
          <div className="media__body">
            <h4>start</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            perferendis veniam commodi distinctio impedit at nesciunt error
            dolorem amet. Quasi?
          </div>
        </div>
      </div>
    </Container>
  );
};

const Skills = () => {
  return (
    <Container>
      <h3 className="skills-title">Skills</h3>
      <div className="skills-grid">
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
        <div className="tile">
          <div className="tile__icon"></div>
          <div className="tile__text">language</div>
        </div>
      </div>
    </Container>
  );
};

const Projects = () => {
  return (
    <Container>
      <div className="projects-wrapper">
        <div className="project-preview"></div>
        <div className="project-caption"></div>
      </div>
    </Container>
  );
};

const Contact = () => {
  return (
    <Container>
      <div className="contact-wrapper">
        <div className="contact-sidebar">
          <div className="contact-sidebar">a</div>
          <div className="contact-sidebar">b</div>
          <div className="contact-sidebar">c</div>
        </div>
        <form className="contact-form">
          <h3>Send me an email</h3>
          <p>
            <label htmlFor="something1">Something1</label>
            <input id="something1" type="text"></input>
          </p>
          <p>
            <label htmlFor="something2">Something2</label>
            <input id="something2" type="text"></input>
          </p>
          <button type="submit"></button>
        </form>
      </div>
    </Container>
  );
};

const Footer = () => {
  return (
    <Container>
      <div className="footer-info">
        <span>Develped by ...</span>
        <span>2022</span>
      </div>
    </Container>
  );
};

export default App;
