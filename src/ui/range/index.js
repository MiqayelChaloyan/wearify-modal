import React from 'react';

import { RangeInput } from './styles';

const InputRange = ({
  rangeValue,
  handleRangeChange,
  max,
  min
}) => {
  return (
    <>
      <RangeInput
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
};

export default React.memo(InputRange);
