import React from 'react';
import RukaiForm from './RukaiForm.jsx';
import PastEventsButton from './PastEventsButton.jsx';
import CalendarButton from './CalendarButton.jsx';


const HomeHeader = () => {
  return (
    
    <>
      <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">UPCOMING EVENTS</h1>
      </div>
      <CalendarButton/>
      <RukaiForm/>
    </>
  );
};


export default HomeHeader;