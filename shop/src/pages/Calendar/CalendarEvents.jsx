// src/EventManager.jsx
import React, { useState, useEffect } from 'react';

// Event data for specific dates
const eventsData = {
  "2024-01-20": {
    link: "https://www.start.gg/tournament/game-5-in-the-d/details",
    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/game5In.png?raw=true",
  },
  "2024-01-28": {
    link: "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings",
    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/vortex.png?raw=true",
  },
  "2024-02-09": {
    link: "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/details",
    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/the%20cure.png?raw=true",
  },
  "2024-02-10": {
    link: "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/details",
    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/10th%20aniv.png?raw=true",
  },
  "2024-02-17": {
    link: "https://www.start.gg/tournament/exodus-2024/details",
    imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true",
  },
  "2024-02-24": [
    {
      link: "https://www.start.gg/tournament/full-bloom-2024/details",
      imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/fullbloom.png?raw=true",
    },
    {
      link: "https://www.start.gg/tournament/perfect-pivot/details",
      imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/pp.png?raw=true",
    },
    {
      link: "https://www.start.gg/tournament/the-truce/details",
      imageSrc: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/truce.png?raw=true",
    },
  ],
};

// Function to generate a unique key for the event
const getEventKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const EventManager = ({ date }) => {
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const eventKey = getEventKey(date);
    const events = eventsData[eventKey] || [];
    setCurrentEvents(Array.isArray(events) ? events : [events]);
  }, [date]);

  return (
    <div className="event-manager">
      {currentEvents.length > 0 && (
        <div className="event-gallery">
          {currentEvents.map((event, index) => (
            <div key={index} className="event-item">
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <img src={event.imageSrc} alt="Event" className="calendarImg" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventManager;
