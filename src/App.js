import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './components/Feedback.module.css';
import _ from 'lodash';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

class App extends Component {
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
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onAddFeedback={key => {
              this.addFeedback(key);
            }}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
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
        </Section>
      </div>
    );
  }
}

export default App;
