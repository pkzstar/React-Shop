import React, { useState, useRef } from 'react';
import ThemeToggleComponent from './LightMode.js';

export const HomeHeader = () => {
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
    <div>
            <ThemeToggleComponent />

      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>
      

      <div id="pastEvents">
        <p className="pastEventsHeader">Past Events</p>
        <div className="pastEventsList">
          <p className="pastYearWrapper">
            <a href="../past-events/2023.html" className="past-year">2023</a>
          </p>
          <p className="pastYearWrapper">
            <a href="../past-events/2024.html" className="past-year">2024</a>
          </p>
        </div>
      </div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">UPCOMING EVENTS</h1>
        <div>
          <a className="navCalPast" href="Calendar">
            <button style={{ margin: 'unset' }} className="calView">Calendar</button>
          </a>
        </div>
      </div>

      <div className="containerCenter">
        <button className="calView" id="pressureCalc" onClick={calcOption}>
          Safe on block?
        </button>
      </div>

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
    </div>
  );
};
