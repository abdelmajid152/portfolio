import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSupabase,
  SiPython,
  SiGit,
  SiPostman,
  SiGooglemaps,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <div className="tech-icons-text">Flutter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <div className="tech-icons-text">Dart</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
        <div className="tech-icons-text">Supabase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemaps />
        <div className="tech-icons-text">Google Maps API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
        <div className="tech-icons-text">REST API</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
