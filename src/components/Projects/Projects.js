import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shtgool from "../../Assets/Projects/shtool.jpg";
import aqarak from "../../Assets/Projects/aqarak.png";
import statusSaver from "../../Assets/Projects/status_saver.png";
import diyaAlqalb from "../../Assets/Projects/diya_alqalb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shtgool}
              isBlog={false}
              title="Shtgool Mobile Quiz Game"
              description="Cross-platform quiz application with over 25,000 downloads. Features authentication and real-time database services. Built with Flutter, GetX, and Firebase."
              demoLink="https://apps.apple.com/us/app/shtgol-%D8%B4%D8%AA%D9%82%D9%88%D9%84/id6739498367"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aqarak}
              isBlog={false}
              title="Aqarak Real Estate App"
              description="A mobile application for buying and renting real estate properties, featuring advanced search and listing filters. Built with Flutter, GetX, and Firebase."
              ghLink="https://github.com/abdelmajid152"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={statusSaver}
              isBlog={false}
              title="WhatsApp Status Saver"
              description="A utility application designed to view and save WhatsApp statuses (images & videos) directly to the gallery. Built with Flutter, GetX, and Local Storage."
              ghLink="https://github.com/abdelmajid152"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diyaAlqalb}
              isBlog={false}
              title="Diya Alqalb"
              description="Comprehensive application focused on intuitive UI and accessibility, with API updates for real-time data retrieval. Built with Flutter, GetX, and REST API."
              ghLink="https://github.com/abdelmajid152/diya_alqalb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
