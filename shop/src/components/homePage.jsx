import React from 'react';
import CalendarButton from './Calendar/CalendarButton.jsx';
import RukaiForm from './RukaiForm.jsx';
import PastEventsButton from './PastEventsButton.jsx';


const HomeHeader = () => {
  return (
    
    <>
      <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">UPCOMING EVENTS</h1>
      </div>

      <CalendarButton />
      <RukaiForm/>
    </>
  );
};


export default HomeHeader;