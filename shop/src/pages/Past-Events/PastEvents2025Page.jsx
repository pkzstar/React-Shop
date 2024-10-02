//PastEvents2023Page.jsx

import React from 'react';
import EventList2025 from '../../components/PastEventsList2025';
import PastEventsButton from '../../components/PastEventsButton';
import PatronsFooter from '../../components/PatronsFooter';




const PastEvents2025Page = () => {
  return (
    <div>
       <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">2025 PAST EVENTS</h1>
      </div>
<EventList2025/>
<PatronsFooter/>

    </div>
  );
};


export default PastEvents2025Page;