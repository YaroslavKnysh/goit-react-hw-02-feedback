import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Feedback.module.css';
import _ from 'lodash';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  countTotalFeedback() {
    return _.sum(_.values(this.state));
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total) {
      return Math.round((this.state.good / total) * 100);
    }
    return '0';
  }
  addFeedback(key) {
    return this.setState({ [key]: this.state[key] + 1 });
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.addFeedback('bad');
          }}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <div>
            <p>There is no feedback</p>
          </div>
        ) : (
          <ul>
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        )}
      </div>
    );
  }
}

export { Feedback };
