import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, countTotal, percentage }) => (
  <ul>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{countTotal}</li>
    <li>Positive feedback:{percentage}%</li>
  </ul>
);

export default Statistics;
