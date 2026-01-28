import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2.introduce")} <span className="purple"> {t("home2.introduceHighlight")} </span> {t("home2.introduceSuffix")}
            </h1>
            <p className="home-about-body">
              {t("home2.description1")}
              <br />
              <br />
              {t("home2.specialize")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.specializeStack")}{" "}
                </b>
              </i>
              {t("home2.specializeEnd")}
              <br />
              <br />
              {t("home2.expertise")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.expertiseStack")}{" "}
                </b>
              </i>
              {t("home2.expertiseEnd")}
              <br />
              <br />
              {t("home2.explore")}
              <b className="purple"> {t("home2.exploreStack")} </b>{t("home2.exploreAnd")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home2.exploreEnd")}
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
