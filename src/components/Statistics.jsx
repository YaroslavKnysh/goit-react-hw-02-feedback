import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ countTotal, percentage, good, neutral, bad }) => (
  <ul>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{countTotal}</li>
    <li>Positive feedback:{percentage}%</li>
  </ul>
);

export default Statistics;
