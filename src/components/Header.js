import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <h2>A'Keia M.</h2>
        </Link>
        <nav>
          <ul className="menu-items">
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1UdT3jGLZcXy934RVBNbWYUhjTstbIii1/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/DrMcCollum5">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/a-keia-m-10312541/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
