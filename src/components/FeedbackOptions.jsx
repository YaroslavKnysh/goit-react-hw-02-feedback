import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onAddFeedback }) => (
  <div>
    <button type="button" onClick={e => onAddFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={e => onAddFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={e => onAddFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
