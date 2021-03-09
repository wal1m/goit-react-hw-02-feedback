import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <>
      {items.map(item => (
        <button
          className={styles.button}
          type="button"
          key={item}
          name={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};
