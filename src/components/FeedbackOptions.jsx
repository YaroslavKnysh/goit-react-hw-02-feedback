import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const FeedbackOptions = ({ onAddFeedback, options }) => (
  <div>
    {options.map(option => (
      <button type="button" onClick={e => onAddFeedback(option)}>
        {_.capitalize(option)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
