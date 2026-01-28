import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shtgool from "../../Assets/Projects/shtool.jpg";
import aqarak from "../../Assets/Projects/aqarak.png";
import statusSaver from "../../Assets/Projects/status_saver.png";
import diyaAlqalb from "../../Assets/Projects/diya_alqalb.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.recentWorks")} <strong className="purple">{t("projects.works")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.subtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shtgool}
              isBlog={false}
              title={t("projects.shtgoolTitle")}
              description={t("projects.shtgoolDesc")}
              demoLink="https://apps.apple.com/us/app/shtgol-%D8%B4%D8%AA%D9%82%D9%88%D9%84/id6739498367"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aqarak}
              isBlog={false}
              title={t("projects.aqarakTitle")}
              description={t("projects.aqarakDesc")}
              ghLink="https://github.com/abdelmajid152"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={statusSaver}
              isBlog={false}
              title={t("projects.statusSaverTitle")}
              description={t("projects.statusSaverDesc")}
              ghLink="https://github.com/abdelmajid152"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diyaAlqalb}
              isBlog={false}
              title={t("projects.diyaAlqalbTitle")}
              description={t("projects.diyaAlqalbDesc")}
              ghLink="https://github.com/abdelmajid152/diya_alqalb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
