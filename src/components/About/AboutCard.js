import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abdelmjid Yahya</span>.
            <br />
            I’m a <span className="purple">Flutter Developer</span> with
            over <span className="purple">3 years of experience</span> in delivering
            production-level applications.
            <br />
            My focus is on building scalable mobile solutions using
            <span className="purple"> Flutter</span>, <span className="purple">Firebase</span>,
            and <span className="purple">Supabase</span>.
            <br />
            <br />
            Beyond developing apps, I am deeply interested in:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Mastering Clean Architecture 🏗️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Advanced State Management (GetX, BLoC) 🧠
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance Optimization in Mobile Apps ⚡
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares."{" "}
          </p>
          <footer className="blockquote-footer">Abdelmjid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
