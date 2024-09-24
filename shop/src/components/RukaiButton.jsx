// RukaiButton.jsx
import React from 'react';

const RukaiButton = ({ onCalcOption }) => {
  return (
    <div className="containerCenter">
      <button className="calView" id="pressureCalc" onClick={onCalcOption}>
        Safe on block?
      </button>
    </div>
  );
};

export default RukaiButton;
