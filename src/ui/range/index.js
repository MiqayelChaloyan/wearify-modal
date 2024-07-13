import React from 'react';
import './styles.css';

const InputRange = React.memo(({
  rangeValue,
  handleRangeChange,
  max,
  min
}) => {
  return (
    <>
      <input
        id="range"
        type="range"
        min={min}
        max={max}
        value={rangeValue}
        step="1"
        onChange={handleRangeChange}
      />
    </>
  );
});

export default InputRange;
