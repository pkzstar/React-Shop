import React from 'react';
import HomeHeader from './homePage.jsx';



// EventComponent displays individual event details
const EventComponent = ({ eventData }) => {


  return (
    <li className="events">
      <a href={eventData.link} target="_blank" rel="noopener noreferrer">
        <img
          className="events-banners"
          src={eventData.imageUrl}
          alt=""
        />
      </a>
      <div className="eventsContent" style={{ flex: 'auto' }}>
        <a
          href={eventData.link}
          className="eventTitle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="event-head" style={{ flex: '100' }}>
            {eventData.name}
            {eventData.rankImg && (
              <img
                className="pm-rank"
                src="https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true"
                alt=""
              />
            )}
            <br />
            <b className="event-date" style={{ display: 'inline-flex' }}>
              {eventData.location}
            </b>
            <b className="event-date" style={{ display: 'inline-flex' }}>
              {eventData.date}
            </b>
          </h1>
        </a>
        <p className="event-date" style={{ display: 'block' }}>
          {eventData.date}
        </p>
        <p className="events-text">{eventData.description}</p>
        <a
          className="startgg start-gg-home"
          href={eventData.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start.gg
        </a>
        {eventData.stream && (
          <a
            className="stream start-gg-home"
            href={eventData.stream}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stream
          </a>
        )}
        {eventData.trailer && (
          <a
            className="trailer start-gg-home"
            href={eventData.trailer}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailer
          </a>
        )}
      </div>
    </li>
  );
};

// EventLoop handles the display of events in pairs
const EventLoop = ({ eventsData }) => {
  // Split the events data into chunks of two
  const chunkedEvents = [];
  for (let i = 0; i < eventsData.length; i += 2) {
    chunkedEvents.push(eventsData.slice(i, i + 2));
  }

  return (
    <div className="eventsContainer">
      {chunkedEvents.map((eventsPair, index) => (
        <ul className="eventsList" key={index}>
          {eventsPair.map((eventData, idx) => (
            <EventComponent key={idx} eventData={eventData} />
          ))}
        </ul>
      ))}
    </div>
  );
};

// Sample event data (replace with actual data as needed)
const eventsData = [
  {
    name: "Tech Zone 3",
    date: "8/31/24",
    location: "Lisle, IL, USA",
    description: "Competitor Registration (7/12 - 8/30) $15. Day-Of Competitor Registration (8/31) $20. Spectator Registration $10. Online Day-Of registration will be available from 12:00am-02:00pm. If you would like to register at the venue, you will have to be there at least 1 hour before your bracket of choice is set to start.",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F685674%2Fimage-c4721066d975473bbb300c0cb9c6fba3-optimized.png&ehk=8hPucP15HYK%2BadyuKPEp36gjy6N9HFnZm5UZKxcINS8%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/tech-zone-3/details",
    rankImg: true,
    trailer: "",
    stream: ""
  },
  {
    name: "DFW Fest FINALE :(",
    date: "8/31/24",
    location: "Plano, TX, USA",
    description: "The final DFW Fest! Doors at 12PM CT, Dubs at 1PM CT, Singles at 3PM CT",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694863%2Fimage-566e5e5f63a5f87f94a87375509f61c9-optimized.png&ehk=CaWmVw9oqVniui2UvyVvvcfkhfGIJ9rEMmwP9AdBz9A%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/dfw-fest-finale/details",
    rankImg: true,
    trailer: "https://youtu.be/plhYgcCJwtA",
    stream: "https://www.twitch.tv/projectmnexus"
  },
  {
    name: "Undertow 2024",
    date: "9/6/24 - 9/9/24",
    location: "Sandusky, OH, USA",
    description: "Thanks to the dedication of the Midwest Project+ and HDR communities, we're proud to continue the water park shadow major tradition in 2024!",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/undertow2024.png?raw=true",
    link: "https://www.start.gg/tournament/undertow-2024/details",
    rankImg: true,
    trailer: "https://drive.google.com/file/d/1vimHNr_rDTmjhH1vFLUpQZjQPFIsG7xR/view",
    stream: "https://www.twitch.tv/projectmnexus"
  },
  {
    name: "Rising Rumble",
    date: "9/14/24",
    location: "Waco, TX, USA",
    description: "Welcome to the eighth and final Best in Texas 2024 League event before the finale! This event features three different tiers of brackets after pools, so each tier of player will have a chance to compete against other players around their skill level. That means there's a trophy for the winner of each bracket!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696391%2Fimage-7685a90fa93f882994733553bd877bdb-optimized.png&ehk=J4kX1Hmj1QYyaSM6lqGDfNRXKJsBVr%2BD0j7R%2ByW%2B1aY%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/rising-rumble-a-best-in-texas-league-event/details",
    rankImg: false,
    trailer: "",
    stream: "https://www.twitch.tv/projectmnexus"
  },
  {
    name: "Game 5 in the D #5",
    date: "9/21/24 - 9/22/24",
    location: "Detroit, MI, USA",
    description: "We welcome all valiant competitors to our local P+ scene's return-to-form! Featuring a professional stream, custom tournament badges, your favorite players, and much, much more, this will be an event you won't want to miss!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F691070%2Fimage-20c7e0ee687afcac9b01ac503fbdc8c3-optimized.jpg&ehk=RA9HKOI4f5SFLA5BA6Eogqbd89fxlbUvo52xfFEc1Mg%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/game-5-in-the-d-5-the-big-one/details",
    rankImg: true,
    trailer: "",
    stream: "https://www.twitch.tv/game5projectplus"
  },
  {
    name: "Baseline 2024",
    date: "9/21/24 - 9/22/24",
    location: "Mesa, AZ, USA",
    description: "Arizona's Newest Melee and P+ Regional in the same venue as ECLIPSE! This event is completely community ran, and is not affiliated with any company, sponsor, or group. If we can secure 100 entrants total, we should be able to continue this series in coming years!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F696951%2Fimage-774bc33fc7d897565f38748cc29f7e83-optimized.png&ehk=fy1oedzzzd2gQFlAnQqL8YbDk8cGiuxWg2oGGup6CJc%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/baseline-2024/details",
    rankImg: false,
    trailer: "",
    stream: ""
  },
  {
    name: "Final Warning: The Golden Age Chapter II",
    date: "9/21/24",
    location: "Portland, ME, USA",
    description: "Early Bird Venue Fee! - Register by the end of August to save a few bucks! (Online payment required for discount!) Note: We're in a different room in the same venue this time! Pictures/details for getting in coming soon!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F701424%2Fimage-d681bf47d0ca7e37daf9b88631bea7c6-optimized.png&ehk=4%2FtFRi5qoGZRp6z7gv14YZMIgr%2BD171SAeuCN7Zxs90%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/final-warning-the-golden-age-chapter-ii/details",
    rankImg: false,
    trailer: "",
    stream: ""
  },
  {
    name: "Mock the Hill",
    date: "9/28/24",
    location: "Rock Hill, SC, USA",
    description: "Mock the Hill A p+ shadow regional held @ Rock the Hill 3. If you're already signed up on the main start gg you won't have to pay venue for p+",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F697791%2Fimage-39545909a658026a858498ec68a98ebb-optimized.jpg&ehk=ptFX7jG0LIcnP8be9NZVzkVsjHxCT4RTEsPKL%2BloJbw%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/mock-the-hill/details",
    rankImg: false,
    trailer: "",
    stream: ""
  },
  {
    name: "Infrared 2024",
    date: "10/6/24",
    location: "Westford, MA, USA",
    description: "This event will take place on Saturday, October 6th inside of the Wavelength 2024 Venue. You MUST be registered for Wavelength 2024 as a competitor or spectator in order to attend this event!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F689857%2Fimage-beb293c506128370f03dbac8b3301b61-optimized.jpg&ehk=USndSOdl8bTgh1izawrAwxr2nxvNn%2FTpocJgAGqoDY0%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/infrared-2024/details",
    rankImg: false,
    trailer: "",
    stream: ""
  },
  {
    name: "Big Cheese 5",
    date: "10/11/24 - 10/13/24",
    location: "Woodville South SA, Australia",
    description: "The South Australian Smash & Fighting Game Community are proud to announce the return of Adelaide's local competitive gaming community Major - The Big Cheese ",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/bigcheese5.png?raw=true",
    link: "https://www.start.gg/tournament/big-cheese-5-south-australia-smash-fgc-major/details",
    rankImg: false,
    trailer: ""
  },
  {
    name: "Smash of the Titans 9",
    date: "10/12/24",
    location: "Bloomington, IL, USA",
    description: "Illinois Wesleyan University is back with our semesterly Smash regional! The tournament will be held in the Young Main Lounge in the Memorial center on campus (there will be signage posted too). If you have any questions, message @roguecora or any of the other TO's in the Discord!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694496%2Fimage-b405f84572aec93db03ff18f1390501d-optimized.jpg&ehk=oZVIfG8%2BqWSv47vhSJS3IF2MsZ%2FQ91A%2FGHI%2F4tT6UGg%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/smash-of-the-titans-9-1/details",
    rankImg: false, 
    trailer: "",
    stream: ""
  },
  {
    name: "Five Nights at Fingy's 2",
    date: "10/12/24 - 10/13/24",
    location: "Mesa, AZ, USA",
    description: "AZPM is back! Five Nights at Fingy's 2 is a FNAF themed Project+ Tournament in Mesa, Arizona",
    imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fnaf2.png?raw=true",
    link: "https://www.start.gg/tournament/five-nights-at-fingy-s-2/details",
    rankImg: false, 
    trailer: "https://www.youtube.com/watch?v=mEsQ1_rF7gM&feature=youtu.be",
    stream: "https://www.twitch.tv/AZPM"
  },
  {
    name: "Tussleopolis",
    date: "10/26/24",
    location: "Normal, IL, USA",
    description: "It's a new era. The game has changed, but the tussle remains...The Tussle Saga is BACK. Return to the Midwest grassroots Project M experience. From the team that brought you Warp Zone 2, Undertow, and Bird House XII, we are thrilled to revitalize this Midwest PM series.",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F694928%2Fimage-d570f648aa26ccea66517f31a2dccda5-optimized.png&ehk=wQJOmHo9Afn6nRwa%2FwDShMfftHg7tIqqjo%2BnGCznW8s%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/tussleopolis/details",
    rankImg: true, 
    trailer: "https://youtu.be/VY6JO0mD0po",
    stream: ""
  },
  {
    name: "Blacklisted 9",
    date: "11/16/24 - 11/17/24",
    location: "Springfield, MA, USA",
    description: "Blacklisted has moved venues for the first time in five years! Join us in Springfield, Massachusetts for the biggest and best Blacklisted yet! Blacklisted 9 will be returning with Doubles and Singles pools which will send players into double elimination Pro and Amateur brackets - now for both Project+ and HDR!",
    imageUrl: "https://www.bing.com/th?pid=Sgg&qlt=100&u=https%3A%2F%2Fimages.start.gg%2Fimages%2Ftournament%2F681909%2Fimage-7d4e0ff8435ebeb4a6ceb3cd129b1705-optimized.png&ehk=sQBjT2ATBqcPGXSXEzLSl2H8PYlq6I79X7ucG2mT4hU%3D&w=280&h=280&r=0",
    link: "https://www.start.gg/tournament/blacklisted-9-a-project-and-hdr-major/details",
    rankImg: true, 
    trailer: "https://twitter.com/BlacklistedSSB/status/1817403907984761246",
    stream: "https://www.twitch.tv/projectmnexus"
  }
];

function EventModule() {
  return (
    
    <div id="eventsList">
        <HomeHeader />
      <EventLoop eventsData={eventsData} />
    </div>
  );
}

export default EventModule;
