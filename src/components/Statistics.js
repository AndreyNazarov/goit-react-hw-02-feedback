import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics/Statistics.module.css';
export default function Statistics(props) {
  return (
    <div>
      {Object.entries(props).map(([key, value]) => {
        return (
          <div key={key} className={s.statistics}>
            <span className={s.key}>{key}:</span>
            <span className={s.quantity}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}

Statistics.propTypes = {
  props: PropTypes.array,
};
