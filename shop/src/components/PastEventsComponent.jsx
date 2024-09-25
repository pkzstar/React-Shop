   
   
 const PastEventList = ({ eventData }) => {
  return (
    <ul id="pastList" className="pastList">
      {eventData.map((event, index) => (
        <li key={index} className="past-events">
          <div style={{ flex: '0' }}>
            <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
              <img
                className="past-events-banners"
                src={event.imageUrl}
                alt=""
              />
            </a>
            <div>
              <img
                className={event.hideRankImage ? 'pm-rank-centered-invis' : 'pm-rank-centered'}
                src="https://github.com/pkzstar/plus-side/blob/main/images/pmrank.png?raw=true"
                alt=""
              />
            </div>
            <h1 className="past-events-title">
              <a href={event.eventUrl} target="_blank" rel="noopener noreferrer">
                {event.eventTitle}
              </a>
            </h1>
            <p className="past-article-text">Date : {event.date}</p>
            <p className="past-article-text">Location : {event.location}</p>
            <p className="past-article-text">Entrants : {event.entrants}</p>
            <p className="top3">🥇: {event.first}</p>
            <p className="top3">🥈: {event.second}</p>
            <p className="top3">🥉: {event.third}</p>
            {event.vodsUrl && (
              <a className="vodsPast" href={event.vodsUrl} target="_blank" rel="noopener noreferrer">
                Vods
              </a>
            )}
            <a className="startgg" href={event.eventUrl} target="_blank" rel="noopener noreferrer">
              start.gg
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PastEventList