import s from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options }) {
  return (
    // <div>
    //   <div className={s.option}>
    //     {optionKeys.map(option => {
    //       return (
    //         <div key={option}>
    //           <button value={option}>{option}</button>
    //         </div>
    //       );
    //     })}
    <div>
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
    </div>
    //   </div>
    // </div>
  );
}
