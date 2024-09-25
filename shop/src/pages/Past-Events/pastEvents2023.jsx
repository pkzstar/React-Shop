import React from 'react';
import ThemeToggleComponent from '../../components/LightMode';
import PastEventList from '../../components/PastEventsComponent';
import EventList2023 from '../../components/PastEventsList';
import PastEventsButton from '../../components/PastEventsButton';



const PastEvents2023Page = () => {
  return (
    <div>
       <ThemeToggleComponent />
       <PastEventsButton/>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">2023 PAST EVENTS</h1>
      </div>
<PastEventList/>
<EventList2023/>
    </div>
  );
};


export default PastEvents2023Page;