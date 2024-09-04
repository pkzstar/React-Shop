//articles pagme

import React from 'react';
import '../index.css';


// import lightMode from '../generaljscss/lightMode.js';
// import script from '../generaljscss/script.js'; 

const ArticlesPage = () => {
  return (
    
    <div>
      <img id="bulb" className="lightBulb" alt="Light Bulb" />

      <div className="wallpaper"></div>
      <div className="wallpaper2"></div>

      <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">ARTICLES</h1>
      </div>

      <div id="articlejs">
        <ul>
        <li className="articleStyle">
          {/* <li style={{ flex: 0 }} className="articleStyle"> */}
            <a href="articles/console-capture.html">
              <img className="article-banner" src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/console-capture/ConsoleCapture.png?raw=true" alt="Console Capture" />
            </a>
            <div>
            <h1 className="article-head">
              {/* <h1 style={{ flex: 100 }} className="article-head"> */}
                <a href="articles/console-capture.html" className="articleTitle">Motobug's In-Depth Guide to Project M Console Capture</a>
                <p className="article-date">Written by: <a href="https://twitter.com/Motobug_" target="_blank" rel="noopener noreferrer" className="articleAuthor">@Motobug_</a></p>
                <p className="article-date">7/11/24</p>
              </h1>
              <p className="article-body">
                Just getting a weekly started and interested in having a stream, or looking for the path to the highest quality capture possible? Whatever your situation may be. this guide will walk you through a variety of configurations for recording across many different price points.
              </p>
              <a className="articleRead" href="articles/console-capture.html">Read More</a>
            </div>
          </li>

          {/* Repeat for other articles, replacing links, images, and text as needed */}
          <li className="articleStyle">
          {/* <li style={{ flex: 0 }} className="articleStyle"> */}
            <a href="articles/The-Bigger-Mile-High-Club.html">
              <img className="article-banner" src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/tbmhc/tbmhc%20img.png?raw=true" alt="The Bigger Mile High Club" />
            </a>
            <div>
              <h1 className="article-head">
              {/* <h1 style={{ flex: 100 }} className="article-head"> */}

                <a href="articles/The-Bigger-Mile-High-Club.html" className="articleTitle">The Bigger Mile High Club and my time as a TO</a>
                <p className="article-date">Written by: <a href="https://twitter.com/FemmeboiRoy" target="_blank" rel="noopener noreferrer" className="articleAuthor">@FemmeBoiRoy</a></p>
                <p className="article-date">5/25/24</p>
              </h1>
              <p className="article-body">
                After a little bit of time, the idea got floated of using the amazing venue we had to run a bigger event like a regional. I wrote way more about this and how Colorado has grown as a scene in a prior article I wrote for PlusSide about Mile High Club. Before Mile High Club was even over, I had the date locked in for “MHC 2”. 4/20/2024 in Denver, CO. With this new fire inside me, we brainstormed a list of people to reach out to. Some of which were Donkos, Ryzuul, Poilu, and old heads from every state. My work began again.
              </p>
              <a className="articleRead" href="articles/The-Bigger-Mile-High-Club.html">Read More</a>
            </div>
          </li>

          {/* Repeat for other articles */}
        </ul>
      </div>

      <div className="patronsCenter">
        <a className="patrons whiteText" href="../patreon/patreons.html">A huge thank you to all our patrons!</a>
      </div>

      <div className="wavesBoth">
        <img className="wave" src="https://github.com/pkzstar/plus-side/blob/main/images/wave-41459%20(3).png?raw=true" alt="Wave" />
        <img className="waveReverse" src="https://github.com/pkzstar/plus-side/blob/main/images/wave-41459%20(3).png?raw=true" alt="Wave Reverse" />
      </div>

      {/* <script src={lightMode} />
      <script src={script} /> */}
    </div>
  );
};

export default ArticlesPage;
