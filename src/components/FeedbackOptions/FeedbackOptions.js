import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionKeys = Object.keys(options);
  return (
    <div>
      <div className={s.option}>
        {optionKeys.map(option => {
          return (
            <div key={option}>
              <button
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
};

{
  /* <div>
      <button type="button" className={s.green} onClick={() => options('good')}>
        Good
      </button>
      <button
        type="button"
        className={s.neutral}
        onClick={() => options('neutral')}
      >
        Neutral
      </button>
      <button type="button" className={s.red} onClick={() => options('bad')}>
        Bad
      </button>
    </div> */
}
