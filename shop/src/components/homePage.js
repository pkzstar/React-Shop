import React, { useState, useEffect, useRef } from 'react';

export const HomeHeader = () => {
  // State to manage the display of the form, calculation result, and theme
  const [showForm, setShowForm] = useState(false);
  const [calcResult, setCalcResult] = useState('');
  const [theme, setTheme] = useState('dark');

  // Refs for input fields and bulb
  const inputHitLagRef = useRef(null);
  const inputShieldStunRef = useRef(null);
  const bulbRef = useRef(null);

  // Function to handle the button click and toggle the form display
  const calcOption = () => {
    setShowForm(prevShowForm => !prevShowForm);
    setCalcResult('');
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const hitLag = parseInt(inputHitLagRef.current.value, 10);
    const shieldStun = parseInt(inputShieldStunRef.current.value, 10);
    const result = shieldStun - hitLag;

    setCalcResult(result >= 1 ? `+${result}` : `${result}`);
  };

  // Function to set the mode
  const setMode = (isDark) => {
    if (isDark) {
      bulbRef.current.src = 'https://raw.githubusercontent.com/pkzstar/plus-side/8492b4fa5d68b55899473283879884976a77f904/images/bulbDark.png';
      updateBackgroundImages('https://raw.githubusercontent.com/pkzstar/plus-side/96e3c064c37da4290e7c24a7c7b6c1cc8ea2c8cb/images/imageLight.png'); // Dark mode image

      document.querySelectorAll('.pastEventsHeader').forEach(el => el.style.color = 'black');
      document.querySelectorAll('.patrons').forEach(el => el.style.color = 'black');
      document.body.style.backgroundColor = 'white';
      document.querySelectorAll('.donorName').forEach(el => el.style.color = 'black');

      localStorage.setItem('theme', 'dark');
    } else {
      bulbRef.current.src = 'https://www.emphysys.com/wp-content/uploads/2015/04/iconmonstr-light-bulb-17-icon-256.png';
      updateBackgroundImages('https://github.com/pkzstar/plus-side/blob/main/images/bg100.png?raw=true'); // Light mode image

      document.querySelectorAll('.pastEventsHeader').forEach(el => el.style.color = 'white');
      document.querySelectorAll('.patrons').forEach(el => el.style.color = 'white');
      document.body.style.backgroundColor = 'black';
      document.querySelectorAll('.donorName').forEach(el => el.style.color = 'white');

      localStorage.setItem('theme', 'light');
    }
  };

  // Function to update background images for wallpapers
  const updateBackgroundImages = (imageUrl) => {
    document.querySelectorAll('.wallpaper').forEach(el => el.style.backgroundImage = `url('${imageUrl}')`);
    document.querySelectorAll('.wallpaper2').forEach(el => el.style.backgroundImage = `url('${imageUrl}')`);
  };

  // Toggle mode when the bulb is clicked
  const toggleTheme = () => {
    setMode(theme === 'dark' ? false : true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Initialize mode based on saved preference or default to dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setMode(savedTheme === 'dark');
    setTheme(savedTheme || 'dark');
  }, []);

  return (
    <div>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div id="navBar"></div>

      <img
        ref={bulbRef}
        id="bulb"
        className="lightBulb"
        alt="Light Bulb"
        onClick={toggleTheme}
      />

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
          <a className="navCalPast" href="Calendar/CalView.html">
            <button style={{ margin: 'unset' }} className="calView">
              Calendar
            </button>
          </a>
        </div>
      </div>

      <div className="containerCenter">
        <button className="calView" id="pressureCalc" onClick={calcOption}>
          Safe on block?
        </button>
      </div>

      <div id="PressureForms">
        {showForm && (
          <>
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
            <button
              id="submitPressure"
              onClick={handleSubmit}
            >
              Submit
            </button>
            {calcResult && <p id="calcOutPut">{calcResult}</p>}
          </>
        )}
      </div>
    </div>
  );
};
