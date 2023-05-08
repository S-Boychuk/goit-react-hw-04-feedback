import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ feedbacks, total, positivePercentage }) => {
  return (
    <ul className={css['statistics-list']}>
      {feedbacks.map(([key, value]) => {
        return (
          <li key={key} className={css['statistics-item']}>
            {key}: {value}
          </li>
        );
      })}
      <li className={css['statistics-item']}>total: {total}</li>
      <li className={css['statistics-item']}>
        positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
