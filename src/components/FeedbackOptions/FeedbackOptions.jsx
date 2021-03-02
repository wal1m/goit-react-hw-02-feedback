import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options }) => {
  const { onGood, onNeutral, onBad } = options;
  return (
    <>
      <button className={styles.button} type="button" onClick={onGood}>
        Good
      </button>
      <button className={styles.button} type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button className={styles.button} type="button" onClick={onBad}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};
