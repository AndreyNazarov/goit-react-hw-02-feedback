import './App.css';
import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notifications/Notifications';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  stateArray = () => {
    let foo = [];
    foo.push(...this.state);
    console.log(foo);
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return (100 * good) / total;
  }

  increment = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const percentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback() > 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // onLeaveFeedback={this.stateArray}
            options={this.increment}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={`${percentage}%`}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
