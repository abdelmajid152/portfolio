import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.intro")} <span className="purple">{t("aboutCard.name")}</span>.
            <br />
            {t("aboutCard.role")} <span className="purple">{t("aboutCard.roleHighlight")}</span> {t("aboutCard.experience")} <span className="purple">{t("aboutCard.experienceYears")}</span> {t("aboutCard.experienceEnd")}
            <br />
            {t("aboutCard.focus")}
            <span className="purple"> {t("aboutCard.stack1")}</span>, <span className="purple">{t("aboutCard.stack2")}</span>,
            {" "}{t("aboutCard.focus").includes("and") ? "" : "و"} <span className="purple">{t("aboutCard.stack3")}</span>.
            <br />
            <br />
            {t("aboutCard.beyond")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {t("aboutCard.quote")}{" "}
          </p>
          <footer className="blockquote-footer">Abdelmjid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
