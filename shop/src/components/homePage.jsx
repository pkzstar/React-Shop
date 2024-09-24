import React from 'react';
import ThemeToggleComponent from './LightMode.js';
import CalendarButton from './Calendar/CalendarButton.jsx';
import RukaiForm from './RukaiForm.jsx';
import PastEventsButton from './PastEventsButton.jsx';

const HomeHeader = () => {
  return (
    <div>
      <ThemeToggleComponent />
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>
      <PastEventsButton/>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">UPCOMING EVENTS</h1>
      </div>

      <CalendarButton />
      <RukaiForm/>
    </div>
  );
};


export default HomeHeader;