// RukaiForm.jsx
import React, { useRef, useState } from 'react';
import RukaiButton from './RukaiButton';

const RukaiForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [calcResult, setCalcResult] = useState('');
  const inputHitLagRef = useRef(null);
  const inputShieldStunRef = useRef(null);

  const calcOption = () => {
    setShowForm(prevShowForm => !prevShowForm);
    setCalcResult('');
  };

  const handleSubmit = () => {
    const hitLag = parseInt(inputHitLagRef.current.value, 10);
    const shieldStun = parseInt(inputShieldStunRef.current.value, 10);
    const result = shieldStun - hitLag;

    setCalcResult(result >= 1 ? `+${result}` : `${result}`);
  };

  return (
    <>
      <RukaiButton onCalcOption={calcOption} />
      {showForm && (
        <div id="PressureForms">
          <a href="https://rukaidata.com/P+/" id="rukai" target="_blank" rel="noopener noreferrer">
            Rukai
          </a>
          <p className="rukaiSpacing"></p>
          <input
            ref={inputHitLagRef}
            className="inputPressure"
            placeholder="Landing lag"
            type="number"
          />
          <input
            ref={inputShieldStunRef}
            className="inputPressure"
            placeholder="Shield stun"
            type="number"
          />
          <button id="submitPressure" onClick={handleSubmit}>
            Submit
          </button>
          {calcResult && <p id="calcOutPut">{calcResult}</p>}
        </div>
      )}
    </>
  );
};

export default RukaiForm;
