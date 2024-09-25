
function PastEventsButton() {
    return(

        <div id="pastEvents">
        <p className="pastEventsHeader">Past Events</p>
        <div className="pastEventsList">
          <p className="pastYearWrapper">
            <a href="pastEvents2023" className="past-year">2023</a>
          </p>
          <p className="pastYearWrapper">
            <a href="../past-events/2024.html" className="past-year">2024</a>
          </p>
        </div>
      </div>
    );

}

export default PastEventsButton