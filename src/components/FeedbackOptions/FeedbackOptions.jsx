import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <ul className={css['feedback-options-list']}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              name={option}
              onClick={addFeedback}
              className={css['feedback-options-btn']}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
