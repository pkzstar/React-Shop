//PastEvents2023Page.jsx

import React from 'react';
import EventList2023 from '../../components/PastEventsList2023';
import PastEventsButton from '../../components/PastEventsButton';



const PastEvents2023Page = () => {
  return (
    <div>
       <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">2023 PAST EVENTS</h1>
      </div>
<EventList2023/>
    </div>
  );
};


export default PastEvents2023Page;