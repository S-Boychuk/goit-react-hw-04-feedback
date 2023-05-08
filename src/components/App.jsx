import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const totalFeedback = good + neutral + bad;
  const goodFeedbackPercentage = Math.round((good * 100) / totalFeedback);
  const feedbackObj = {
    good,
    neutral,
    bad,
  };
  const btnNameArr = Object.keys(feedbackObj);
  const feedbacks = Object.entries(feedbackObj);

  const addFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;

      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;
      default:
        console.warn(`field type name - ${name} can't be managed`);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={btnNameArr} addFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            feedbacks={feedbacks}
            total={totalFeedback}
            positivePercentage={goodFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
