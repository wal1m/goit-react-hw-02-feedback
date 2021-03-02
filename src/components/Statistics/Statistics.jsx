import React from 'react';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <>
      {total ? (
        <ul className={styles.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percent}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
