import React from "react";
import Achievement from "./Achievement";
import {
  Container,
  Row,
  Jumbotron
} from "react-bootstrap";

const Achievements = ({ heading, achievements }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {heading}
          </h2>
          <Row >
            {achievements.map(achievement => {
              return <Achievement key={achievement.altText} achievement={achievement} />
            })}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Achievements;
