import React from 'react';
import PropTypes from 'prop-types';

const animateCircle = begin => (
  <animate
    attributeName="r"
    begin={begin}
    dur="0.2s"
    from="0"
    to="2"
    fill="freeze"
  />
);

const Path = ({ isAnimated }) => (
  <svg className="b-path" viewBox="0 0 120 10">
    <line className="b-path__line-stroke" x1="0" y1="5" x2="120" y2="5" strokeDasharray="3" />
    <line className="b-path__line" x1="0" y1="5" x2="120" y2="5" strokeDasharray="120" strokeDashoffset="120">
      <animate attributeName="stroke-dashoffset" dur="2s" to="0" fill="freeze" />
    </line>
    <circle className="b-path__circle" cx="20" cy="5">
      {animateCircle('0.5s')}
    </circle>
    <circle className="b-path__circle" cx="60" cy="5">
      {animateCircle('1s')}
    </circle>
    <circle className="b-path__circle" cx="100" cy="5">
      {animateCircle('1.5s')}
    </circle>
  </svg>
);

Path.defaultProps = {
  isAnimated: false,
};

Path.propTypes = {
  isAnimated: PropTypes.bool,
};

export default Path;
