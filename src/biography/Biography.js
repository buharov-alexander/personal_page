import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';

import Path from 'graphics/Path';
import BiographyCard from 'biography/BiographyCard';

const renderHeader = () => (
  <Row>
    <Col>
      <div className="b-biography__header">
        <h1>Biography</h1>
      </div>
    </Col>
  </Row>
);

const renderCards = () => (
  <Row>
    <Col>
      <BiographyCard
        header="School"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Col>
    <Col>
      <BiographyCard
        header="University"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Col>
    <Col>
      <BiographyCard
        header="Job"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Col>
  </Row>
);

const Biography = () => (
  <section className="b-section">
    <Container className="b-biography">
      <Row className="b-biography__row align-items-center">
        <Col>
          {renderHeader()}
          <Row>
            <Col lg={12}>
              <Path />
            </Col>
            <Col>
              {renderCards()}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Biography;
