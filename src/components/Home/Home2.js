import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Developer with over 3 years of experience, passionate about building
              high-performance mobile applications and clean codebases.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple">
                  {" "}
                  Flutter, Dart, and Firebase{" "}
                </b>
              </i>
              — delivering production-level apps with a focus on seamless user experiences.
              <br />
              <br />
              My expertise includes
              <i>
                <b className="purple">
                  {" "}
                  Clean Architecture, State Management (GetX, BLoC, Provider),{" "}
                </b>
              </i>
              and optimizing app performance for scale.
              <br />
              <br />
              Whenever possible, I apply my knowledge to build projects with
              <b className="purple"> Supabase </b> and explore
              <i>
                <b className="purple">
                  {" "}
                  REST APIs and Backend integrations.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
