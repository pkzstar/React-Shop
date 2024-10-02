import React from 'react';
import PastEventList from './PastEventsComponent.jsx'; // Make sure the path is correct

function EventList2025() {
  const eventData = [];
  

  return (  <>
    <img src="https://media.tenor.com/k708FNiDlmEAAAAi/pikachu-osman-nakas.gif" alt="" className='center'/>
    <PastEventList eventData={eventData} />;
    </>)

  
}

export default EventList2025;
