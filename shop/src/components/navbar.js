import React from 'react';
import './NavBarComponent.css'; // Import the CSS file for styles
import '../index.css'

import { Link } from 'react-router-dom';

function NavBarComponent() {
  return (
    <div className="headerNav">
      {/* Plus Side Link */}
      <Link to="/">
        <img 
          src="https://github.com/pkzstar/plus-side/blob/main/images/plusside.net.png?raw=true" 
          alt="Plus Side Logo" 
          className="plus-side-net-nav"
        />
      </Link>

      {/* Twitter Link */}
      <a 
        href="https://twitter.com/pplusside" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="twitterLink"
      >
        <img 
          src="https://github.com/pkzstar/plus-side/blob/main/images/twitterlogo.png?raw=true" 
          alt="Twitter Logo" 
          className="twitterLink"
        />
      </a>

      {/* Twitch Link */}
      <a 
        href="https://www.twitch.tv/pplusside" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="youtubeLink"
      >
        <img 
          src="https://cdn-icons-png.freepik.com/256/15059/15059878.png?semt=ais_hybrid" 
          alt="Twitch Logo" 
          className="youtubeLink"
        />
      </a>

      {/* YouTube Link */}
      <a 
        href="https://www.youtube.com/@PPlusSide/featured" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="youtubeLink"
      >
        <img 
          src="https://github.com/pkzstar/plus-side/blob/main/images/youtubelogo.png?raw=true" 
          alt="YouTube Logo" 
          className="youtubeLink"
        />
      </a>

      {/* Navigation Text Section */}
      <section className="navText">
        <Link to="/">
          <p id="navText">Events</p>
        </Link>
        <Link to="/articles">
          <p id="navText">Articles</p>
        </Link>
      </section>
    </div>
  );
}

export default NavBarComponent;
