// src/Calendar.jsx
import React, { useState, useEffect } from 'react';
import './Calendar.css';
import EventManager from './CalendarEvents'; // Import the EventManager component

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

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentEvents, setCurrentEvents] = useState([]);
  const today = new Date(); // Get the current date

  const daysInMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  };

  const startDay = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  };

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  const getEventKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const eventKey = getEventKey(currentDate);
    const events = eventsData[eventKey];

    if (events) {
      setCurrentEvents(Array.isArray(events) ? events : [events]);
      setCurrentIndex(0);

      // Change the event index every second
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          return (prevIndex + 1) % events.length;
        });
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    } else {
      setCurrentEvents([]);
      setCurrentIndex(0);
    }
  }, [currentDate]);

  // Function to fade in/out the image and link
  const fadeInOut = (element, callback) => {
    let opacity = 0;
    let increasing = true;
    const interval = setInterval(() => {
      if (increasing) {
        opacity += 0.05;
      } else {
        opacity -= 0.05;
      }
      element.style.opacity = opacity;
      if (opacity >= 1) {
        increasing = false;
        setTimeout(() => {
          increasing = true;
          callback();
        }, 2000);
      } else if (opacity <= 0) {
        clearInterval(interval);
        fadeInOut(element, callback);
      }
    }, 100);
  };

  useEffect(() => {
    const image = document.getElementById('event-image');
    if (image && currentEvents.length > 0) {
      fadeInOut(image, () => {
        // Update image after fade-out and cycle events
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentEvents.length);
      });
    }
  }, [currentIndex, currentEvents]);

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth();
    const firstDay = startDay();

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Add day numbers and event images
    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        day === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      const eventDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const eventKey = getEventKey(eventDate);
      const events = eventsData[eventKey];

      days.push(
        <div key={day} className={`day ${isToday ? 'bg-info' : ''}`}>
          {(!events || (Array.isArray(events) && events.length === 0)) && day}

          {/* Render images for the events on this date */}
          {events && (Array.isArray(events) ? events : [events]).map((event, index) => (
        <a key={index} href={event.link} target="_blank" rel="noopener noreferrer">
        <img
          id="event-image"
          src={event.imageSrc}
          alt="Event"
          className={`calendarImg ${index === currentIndex ? 'fade-in' : 'fade-out'}`}
        />
      </a>
          ))}
        </div>
      );
    }

    return days;
  };

  const renderWeekDays = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="week-days">
        {weekDays.map((day) => (
          <div key={day} className="week-day">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const handleMonthChange = (e) => {
    const selectedMonth = parseInt(e.target.value, 10);
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(selectedMonth);
      return newDate;
    });
  };

  const handleYearChange = (e) => {
    const selectedYear = parseInt(e.target.value, 10);
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(selectedYear);
      return newDate;
    });
  };

  const renderMonthYearSelectors = () => {
    const months = Array.from({ length: 12 }, (_, i) => (
      <option key={i} value={i}>
        {new Date(0, i).toLocaleString('default', { month: 'long' })}
      </option>
    ));

    const years = Array.from({ length: 50 }, (_, i) => (
      <option key={i} value={currentDate.getFullYear() - 25 + i}>
        {currentDate.getFullYear() - 25 + i}
      </option>
    ));

    return (
      <div className="month-year-selectors">
        <select value={currentDate.getMonth()} onChange={handleMonthChange}>
          {months}
        </select>
        <select value={currentDate.getFullYear()} onChange={handleYearChange}>
          {years}
        </select>
      </div>
    );
  };

  return (
    <div>
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className='calendar-container'>
        <div className="calendar">
          <div className="header">
            <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
          </div>
          <div className="week-days-container">
            {renderWeekDays()}
          </div>
          <div className="days">
            {renderDays()}
          </div>
          {/* EventManager to show events for the selected date */}
          <EventManager date={currentDate} />
          {/* Dropdowns and navigation buttons below the days grid */}
          <div className="navigation">
            <div className="month-nav-buttons">
              <button onClick={() => changeMonth(-1)}>Prev Month</button>
              <button onClick={() => changeMonth(1)}>Next Month</button>
            </div>
            {renderMonthYearSelectors()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
