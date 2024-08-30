export const HomeHeader = () => {
    return (
      <div>
        <div className="wallpaper"></div>
        <div className="wallpaper2"></div>
  
        <div id="navBar"></div>
  
        <img id="bulb" className="lightBulb" alt="Light Bulb" />
        {/* <div id="headerButtons"></div> */}
        <div id="pastEvents"></div>
        <div className="upcomingImageParent">
          <h1 id="pageHeader" className="textGradient">UPCOMING EVENTS</h1>
          <div>
            <a className="navCalPast" href="Calendar/CalView.html">
              <button style={{ margin: 'unset' }} className="calView">
                Calendar
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

