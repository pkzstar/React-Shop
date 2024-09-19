import React, { useState, useEffect } from 'react';
import CalendarEvents from '../Calendar/CalendarEvents.js';
import './Calendar.css';
import '../../index.css';
import ThemeToggleComponent from '../LightMode.js';

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  useEffect(() => {
    showCalendar();
  }, [currentMonth, currentYear]);

  const showCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarCells = [];

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push(<td key={j}></td>);
        } else if (date > daysInMonth) {
          break;
        } else {
          const eventData = CalendarEvents.find(e => e.date === date && e.month === currentMonth && e.year === currentYear);
          const cellContent = eventData ? renderEventCell(eventData) : date;

          row.push(<td key={j}>{cellContent}</td>);
          date++;
        }
      }
      calendarCells.push(<tr key={i}>{row}</tr>);
    }

    return calendarCells;
  };

  const renderEventCell = (eventData) => {
    if (eventData.events && eventData.events.length > 0) {
      return (
        <div className="event-container">
          {eventData.events.map((event, index) => (
            <div className="fade-in-out" key={index}>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-link"
                style={{
                  display: index === 0 ? 'block' : 'none', // Show the first link
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="calendarImg"
                  style={{
                    display: index === 0 ? 'block' : 'none', // Show the first image
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      );
    }
  
    return (
      <a href={eventData.link} target="_blank" rel="noopener noreferrer">
        <img src={eventData.image} alt={eventData.title} className="calendarImg" />
      </a>
    );
  };

  useEffect(() => {
    const fadeImages = () => {
      const fadeContainers = document.querySelectorAll('.event-container');
      fadeContainers.forEach(container => {
        const links = container.querySelectorAll('a');
        const images = container.querySelectorAll('img');
        if (images.length === 0) return;

        let currentIndex = 0;

        const fadeInOut = () => {
          links.forEach((link, index) => {
            link.style.display = index === currentIndex ? 'block' : 'none';
            link.style.pointerEvents = index === currentIndex ? 'auto' : 'none';
          });

          images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
            img.style.pointerEvents = index === currentIndex ? 'auto' : 'none';
          });

          currentIndex = (currentIndex + 1) % images.length;
          setTimeout(fadeInOut, 3000);
        };

        fadeInOut();
      });
    };

    fadeImages();
  }, [currentMonth, currentYear]);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div>
      <ThemeToggleComponent />
      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="container calendar-container mt-5">
        <div className="card" style={{ margin: '0 auto' }}>
          <h3 className="card-header">{`${months[currentMonth]} ${currentYear}`}</h3>
          <table className="table table-bordered" id="calendar">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody id="calendar-body">
              {showCalendar()}
            </tbody>
          </table>

          <div className="form-inline">
            <button
              className="btn btn-outline-primary col-sm-6"
              onClick={() => setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1))}
            >
              Previous
            </button>

            <button
              className="btn btn-outline-primary col-sm-6"
              onClick={() => setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1))}
            >
              Next
            </button>
          </div>
          <br />
          <form className="form-inline">
            <label className="lead mr-2 ml-2" htmlFor="month">Jump To: </label>
            <select
              className="form-control col-sm-4"
              name="month"
              id="month"
              onChange={(e) => setCurrentMonth(Number(e.target.value))}
            >
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>

            <label htmlFor="year"></label>
            <select
              className="form-control col-sm-4"
              name="year"
              id="year"
              onChange={(e) => setCurrentYear(Number(e.target.value))}
            >
              <option value="2024">2024</option>
              {/* Add more years as needed */}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
