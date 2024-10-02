//PastEvents2023Page.jsx

import React from 'react';
import EventList2024 from '../../components/PastEventsList2024';
import PastEventsButton from '../../components/PastEventsButton';



const PastEvents2024Page = () => {
  return (
    <div>
       <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">2024 PAST EVENTS</h1>
      </div>
<EventList2024/>
    </div>
  );
};


export default PastEvents2024Page;