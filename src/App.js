import "./App.css";
import Projects from "./components/Projects";
import ProfilePic from "./images/profile_photo.jpg";
import Header from "./components/Header";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className="container" id="about_me">
        <h2>About Me</h2>
        <div className="about-section">
          <div className="about-me">
            <p>
              I've made the transition from health education to become a
              freelance web developer. I've created several full stack web apps
              with JavaScript/HTML5/CSS. I work primarily with React/Node.js,
              but I'm always looking for opportunities to work with new
              technologies. I love the complex problem solving involved in
              creating good code, and I'm passionate about delivering a good
              user experience, from optimizing query times for fast data
              delivery on the back end to creating intuitive, responsive UI on
              the front end. Technical Skills: Front End Technologies:
              JavaScript, React, Bootstrap, Redux, HTML5, CSS, Styled
              Components, Back End Technologies: Node.js, Database: MySQL,
              NoSQL, MongoDB.
            </p>
            <p>
              My specialties include a multitude of approaches and platforms to
              solve programming tasks. I bring a unique and innovated style when
              developing existing projects. Thriving in a fast-paced environment
              where there are frequent challenges is what motivates me as a
              developer. I am also eager to seize new opportunities and
              responsibilities. I work well independently and in collaboration
              with others.
            </p>
          </div>
          <div className="image-section">
            <img
              src={ProfilePic}
              alt="Profile Picture"
              className="profile-pic"
            />
            <div className="social-icons">
              <a target="_blank" href="https://github.com/DrMcCollum5">
                <AiFillGithub size={50} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/a-keia-m-10312541/"
              >
                <AiFillLinkedin size={50} />
              </a>
            </div>
          </div>
        </div>
        <Projects />
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
