function PastEventsButton() {
    return(

        <div id="pastEvents">
        <p className="pastEventsHeader">Past Events</p>
        <div className="pastEventsList">
          <p className="pastYearWrapper">
            <a href="2023" className="past-year">23</a>
            <a href="2024" className="past-year">24</a>
            {/* <a href="2025" className="past-year">25</a> */}
          </p>

        </div>
      </div>
    );

}

export default PastEventsButton