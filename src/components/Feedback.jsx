import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Feedback.module.css';
import _ from 'lodash';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

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
        <FeedbackOptions
          onAddFeedback={key => {
            this.addFeedback(key);
          }}
        />

        <h2>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <div>
            <p>There is no feedback</p>
          </div>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotal={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export { Feedback };
