import React from "react";
import { Button, Card } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="projects">
      <Card className="project">
        <Card.Body>
          <Card.Title>FullStack Store</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            E-Commerce
          </Card.Subtitle>
          <Card.Text>
          First group project building our first full-stack application!
          A e-commerce site that has a database. 
          </Card.Text>
          <a
            href="https://cookies-for-coders-mary.herokuapp.com/"
            className="project-link"
          >
            Project Link
          </a>
        </Card.Body>
      </Card>
      <Card className="project">
        <Card.Body>
          <Card.Title>Day Planner</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Scheduler
          </Card.Subtitle>
          <Card.Text>
          This application utilizes JQuery to provide the user a
          dynamic day-planner. The user can enter to-do tasks into hourly time blocks and save the to do's for later access.
          </Card.Text>
          <a href="https://drmccollum5.github.io/Day-Planner/" className="project-link">
            Project Link
          </a>
        </Card.Body>
      </Card>
      <Card className="project">
        <Card.Body>
          <Card.Title>Code-Refactor</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
          Refactored the Horiseon website. Implemented semantic html elements, consolidated CSS, 
          fixed broken links. 
          </Card.Text>
          <a href="https://drmccollum5.github.io/Code-Refactor/" className="project-link">
            Project Link
          </a>
        </Card.Body>
      </Card>
      <Card className="project">
        <Card.Body>
          <Card.Title>GrandConnect</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
          Connect elementary school children and senior citizens in nursing homes to create 
          a community of empowerment and communication.
          </Card.Text>
          <a href="https://caitlinw29.github.io/GrandConnect/" className="project-link">
            Project Link
          </a>
          <a href="https://github.com/caitlinw29/GrandConnect" className="project-link">GitHub</a>
        </Card.Body>
      </Card>
      <Card className="project">
        <Card.Body>
          <Card.Title>Fifth Project</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <a href="#" className="project-link">
            Project Link
          </a>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Projects;
