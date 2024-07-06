import React from 'react';
import './styles.css';

const InputRange = ({
    rangeValue,
    handleRangeChange
}) => {
  return (
    <>
      <input 
        id="range" 
        type="range" 
        min="50" 
        max="200" 
        value={rangeValue} 
        step="1" 
        onChange={handleRangeChange} 
      />
    </>
  );
};

export default InputRange;
