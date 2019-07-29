import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
} from 'react-bootstrap';

const BiographyCard = ({ header, text }) => (
  <Card className="b-card">
    <Card.Header className="b-card__header">{header}</Card.Header>
    <Card.Body>
      <Card.Text>
        {text}
      </Card.Text>
    </Card.Body>
  </Card>
);

BiographyCard.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BiographyCard;
