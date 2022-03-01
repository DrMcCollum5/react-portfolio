import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#about_me">
          <h2>A'Keia M.</h2>
        </a>
        <nav>
          <ul className="menu-items">
            <li>
              <a href="#projects">Portfolio</a>
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
              <a href="#contact_form">Connect</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
