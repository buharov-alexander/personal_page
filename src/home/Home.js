import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';

const Home = () => (
  <section className="b-home b-section">
    <Container className="b-home__container">
      <Row className="b-home__row align-items-center">
        <Col className="b-home__text-block">
          <div className="b-animate-slide">
            <h3 className="b-home__text b-home__text_h3">Hello! My name is</h3>
            <h1 className="b-home__text b-home__text_h1 b-home__text_last">Bukharov Alexander</h1>
            <h5 className="b-home__text b-home__text_h5">Welcome to my personal page!</h5>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Home;
