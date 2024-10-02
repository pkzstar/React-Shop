import React from 'react';
import ImageZoom from '../../components/ToggleImgZoom';

const HistoryOfHoneypot = () => {
  return (
    <div>
      <div className="wallpaperStatic"></div>

      <div className="article-page-text">
        <h1 id="pageHeader" className="textGradient">The History Of Honeypot</h1>
        <h3 className="colorSwap">Written by ilikepizza107</h3>

        <div id="imgContainer">
          <ImageZoom
            imgId="reImg1"
            src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/HistoryOfHoneypot.png?raw=true"
            alt="History of Honeypot"
            className="article-body-image"
          />
        </div>

        <p className='colorSwap'>
          It’s been over two years since Honeypot’s inception as a series, with the tournament approaching its sixth iteration this December. Honeypot has become such a mainstay tournament in the Project+ community post-quarantine that many assume it has been a part of the series since the first one. In reality, Project+ made its debut in the event lineup at Honeypot 2, and funnily enough, it has Nickelodeon All-Star Brawl to thank for it.
        </p>

        <div className="video-con">
          <iframe 
            src="https://www.youtube.com/embed/ZyQ2eEL6vmY?si=nH1lojsvPerpD909" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <p className='colorSwap'>
          Over two years ago, I was running a Nickelodeon All-Star Brawl tournament at my local when one of the head TOs for Honeypot approached me and asked if I was interested in running NASB at Honeypot 2. I told them that I would think about it, and later that week I messaged them back, saying I would run it if they added Project+ Singles and Doubles to the roster. To my surprise, they agreed, and the rest is history. Despite being in a rough spot in my life during that time, Honeypot 2 offered me an escape from my situation, and something to look forward to. I poured all my attention into it, and the work paid off. That weekend, I went to four tournaments over four days, and I will never do it ever again.
        </p>

        <div className="video-con">
          <iframe 
            src="https://www.youtube.com/embed/7J9ISQv9Zjk?si=xkuVKIeKkVLGlgam" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <p className='colorSwap'>
          In an attempt to garner interest in the event, I’ve always tried to fly out one out of region competitor. For Honeypot 2, that player was Motobug; for Honeypot 3 it was Envy; and Honeypot 4 had Stango. They all made each event special, and definitely did the trick for getting people to come out to the event. Each time my expectations for the event have been blown out of the water, and I only have the people who came out to those events to thank for it. Even though I was somewhat absent for Honeypot 5 due to work, I was still so thankful that the event continued to persist and grow while I was away.
        </p>

        <div className="video-con">
          <iframe 
            src="https://www.youtube.com/embed/mHmFvdShuC8?si=a1R9dKzFvgSU3ttJ" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <p className='colorSwap'>
          I want to make this very clear: Honeypot Project+ as it is would not exist without RosiYY, Che, and UGS. Each tournament ran smoothly and was a pleasure to view because of them. When start.gg went down during Honeypot 4, RosiYY started writing down paper brackets to ensure the event continued on time. She has been the reason these brackets have run the way they have, and I can’t thank her enough for it. Che has always been there to stream the event, and clutched up a stream setup when we thought we weren’t going to have one for Honeypot 5. He’s done an amazing job running the stream, and has always made it a treat to watch.
        </p>

        <div className="video-con">
          <iframe 
            src="https://www.youtube.com/embed/Lfa9xmfENpk?si=_uFe7pCoC22hBznv" 
            title="YouTube video player" 
            frameBorder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <p className='colorSwap'>
          Honeypot 6 is looking to be a great time, and this is the most stacked bracket the tournament has ever seen. The out of region talent is higher than ever, with Rongunshu descending from Ontario to tear up another bracket, and SipMastah hot off of a win from Against All Odds. With the series shifting to a two day format, we worried that the event attendance might take a hit, but thankfully we were very wrong. At the time of writing registration hit over 70 entrants for the event, with every coast coming out to the Putnam museum in the outskirts of Iowa. I’m so thankful to everyone who’s making the trip, and everyone planning on watching the event from afar on ProjectMNexus. Honeypot would not be where we are without you. Thank you.
        </p>
      </div>
    </div>
  );
};

export default HistoryOfHoneypot;