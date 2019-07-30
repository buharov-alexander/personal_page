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
    <Col xs={12} sm={4}>
      <BiographyCard
        header="School"
        text="Kurgan"
      />
    </Col>
    <Col xs={12} sm={4}>
      <BiographyCard
        header="University"
        text="Novosibirsk State University"
      />
    </Col>
    <Col xs={12} sm={4}>
      <BiographyCard
        header="Job"
        text="Xored"
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
          <Row className="d-none d-sm-block">
            <Col>
              <Path />
            </Col>
          </Row>
          {renderCards()}
        </Col>
      </Row>
    </Container>
  </section>
);

export default Biography;
