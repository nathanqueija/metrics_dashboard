import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import withStyle from './CircularProgress.style';

const CircularProgress = ({ className, name, value, color }) => (
  <CircularProgressbar
    className={className}
    minValue={0}
    maxValue={1}
    value={value}
    text={`${value * 100}%`}
    styles={buildStyles({
      pathColor: color,
      textColor: color,
      trailColor: '#d6d6d6'
    })}
  />
);

export default withStyle(CircularProgress);
