import React from 'react';
import ImageZoom from '../../components/ToggleImgZoom'

const ConsoleCapture = () => {
  return (
    <div>

        <div className="wallpaperStatic"></div>


        <div className="article-page-text">
          <h1 id="pageHeader" className="textGradient">
            Motobug's In-Depth Guide to Project M Console Capture
          </h1>
          <h3 className='colorSwap'>
            Written by
            <a
              href="https://twitter.com/Motobug_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="articleLink">&nbsp;@Motobug_</p>
            </a>
          </h3>
          <p  className='colorSwap'>
            Hey there! Thanks for your interest in recording or streaming
            Project+! This guide will encompass the large variety of methods for
            capturing console feed for P+ at a wide variety of price points.
          </p>
          <hr />

          <h2 className='colorSwap' style={{ textAlign: 'center' }}>Introductory Knowledge</h2>
          <p  className='colorSwap'>
            If this is your first time doing any sort of capture, or working
            with AV in general, let me lay out a list of terms and pieces of
            advice before we get started with the guide:
          </p>
          <ul style={{ textAlign: 'left' }}>
            <li className='colorSwap'>
              <strong className='colorSwap'>Composite:</strong> this is the yellow connector included
              by default with the Wii, and is the one you’re most likely to see.
              The cable will also include white and red cables for audio.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>S-Video:</strong> the next step up from composite, though
              this is the least common cable to find of the three nowadays. This
              cable has a circular connector, and splits the video signal of
              composite into two parts, increasing quality.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>Component:</strong> Formally known as YPbPr, Component is
              the highest quality level available for stock Wiis. This is the
              current most common way to capture Wii games.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>Analog:</strong> the type of video signal that the Wii
              natively outputs.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>Digital:</strong> the type of video signal newer devices
              use. Some setups will need to use digital signals for either
              players or capture.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>480i:</strong> the video quality the Wii outputs by
              default, commonly used in tournaments.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>480p:</strong> a higher quality video format available for
              use with component cables officially.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>Splitter:</strong> a device that separates video/audio
              signals into multiple outputs. Use powered splitters for analog
              signals.
            </li>
            <br />
            <li className='colorSwap'>
              <strong className='colorSwap'>OBS Studio:</strong> a free and feature-rich capture
              software for various desktop operating systems.
            </li>
          </ul>

          <hr />

          <h2 className='colorSwap' style={{ textAlign: 'center' }}>Cheap/Beginner</h2>
          <p  className='colorSwap'>
            On a budget, or just starting up a weekly? No problem! There are a
            few ways to grab easy console capture in good quality for the price.
          </p>
          <p  className='colorSwap'>
            The simplest way to do this is to use one of these dual{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="articleLink"
              href="https://www.amazon.com/Universal-S-video-av-Cables-Not-Specified/dp/B003SVTFHW/ref=sr_1_3?crid=PTCRZ2D9LB1H&keywords=wii+s+video+cable"
            >
              Composite/S-Video AV cables
            </a>
            ; this way, composite can go to the TV, while S-video is sent to a
            device like{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="articleLink"
              href="https://www.amazon.com/DIGITNOW-Capture-Adapter-Grabber-Converter/dp/B08RMSJNW2"
            >
              this one
            </a>{' '}
            and captured on the PC.
          </p>

          <p  className='colorSwap'>
            Capturing with S-Video is better than using composite. Capture
            samples below:
          </p>
          <p  className='colorSwap'>
            <strong className='colorSwap'>Composite:</strong>
            <a
              id="articleLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://imgur.com/a/bDFydTf"
            >
             &nbsp; https://imgur.com/a/bDFydTf
            </a>

            
        <div id="imgContainer">
          <ImageZoom
            imgId="reImg1"
            src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/console-capture/Composite.png?raw=true"
            alt="Composite sample"
            className="article-body-image article-body-image-console"
            tabIndex="0"
          />
        </div>

            <strong className='colorSwap'>S-Video:</strong>
            <a
              id="articleLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://imgur.com/a/CISGTVo"
            >
             &nbsp; https://imgur.com/a/CISGTVo
            </a>

            <div id="imgContainer">
          <ImageZoom
            imgId="reImg2"
            src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/console-capture/SVideo.png?raw=true"
            alt="S-Video sample"
            className="article-body-image article-body-image-console"
            tabIndex="0"
          />
        </div>
          </p>
          <hr />
          <h2 className='colorSwap' style={{ textAlign: "center" }}>Intermediate</h2>
<p  className='colorSwap'>
  Want to upgrade to the best native output for the Wii? It’s easier than you’d think! 
  This part of the guide will cover getting the best of the best without any hardware 
  modification. You'll need a few things for this setup to work:
</p>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>CRT with Component input</strong>: might be obvious, but the signal will 
    need to get to the players as well. CRTs generally started including these inputs 
    in the early to mid 1990s, so anything from that time onwards has a chance of 
    including them. I’d personally recommend early 2000s-era Sony Trinitrons, as 
    those not only have the best tubes, but will also likely have component inputs. 
    Make sure to avoid anything that calls itself an EDTV, though, as these are usually 
    digital internally and may introduce lag. If it has a tube, it’s generally fine.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Component cables</strong>: these will be needed to grab the output from the Wii. 
    These are still quite cheap on places like Amazon, and can also be found locally still if 
    you’re lucky.{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.amazon.com/Component-HDTV-EDTV-Definition-Compatible-Nintendo/dp/B08TM4T3NS/ref=sr_1_5?crid=12U60KOEHGXGU&keywords=wii+component+cables&qid=1697136668&sprefix=wii+component+cables%2Caps%2C99&sr=8-5"
    >
      These
    </a>{" "}
    should work just fine, but for best quality I’d recommend the{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://rondoproducts.com/products/hd-retrovision-wii?dt_id=504345%3Bap%3A232740"
    >
      HD Retrovision ones
    </a>.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Component splitter: </strong>this will be needed to send your Wii’s output 
    to both the CRT and your capture device, as well as any other places video or audio 
    may need to be sent. I’d personally recommend{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.amazon.com/Component-Video-Audio-Splitter-BolAAzuL/dp/B09575J94F/ref=sr_1_3?crid=1F404TGKUFRC1&keywords=component+video+splitter&qid=1697136776&sprefix=component+video+splitte%2Caps%2C104&sr=8-3"
    >
      this one
    </a>, but units from the component era (early-mid 2000s) are generally good picks as well. 
    Make sure the splitter you buy is <strong className='colorSwap'>powered</strong>!
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Upscaler: </strong>this is where the fun begins! An upscaler will convert your analog 
    video signal from 480i to a format that capture cards will accept, output over HDMI. I’ll 
    split these into their own tiers as well.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.amazon.com/Paddsun-Converter-Output-Monitor-GBS-8200/dp/B01IBJCAIG/ref=as_li_ss_tl?ie=UTF8&qid=1539004437&sr=8-2&keywords=gbs8200&linkCode=sl1&tag=myliinga-20&linkId=7279a7f8ddf204c8f5498d54e43992a3&language=en_US"
    >
      <strong className='colorSwap'>GBS-8200</strong>
    </a>
    <strong className='colorSwap'>:</strong> a bare bones scaler originally intended for arcade boards, this scaler 
    fits in as a low-end option. This box will output a VGA signal though (like you’d find 
    on an old PC monitor), so you’ll need a{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.amazon.com/Gold-Plated-Compatible-Computer-Projector-Raspberry/dp/B07ZF8WFZN/ref=sr_1_3?crid=7AX9VJUVFOSL&keywords=vga+to+hdmi+adapter&qid=1697137478&sprefix=vga+to+hdmi+%2Caps%2C98&sr=8-3"
    >
      VGA to HDMI adapter
    </a>{" "}
    to use it with a capture card. This option trades cost for a bit of required manual 
    adjustment to get optimal video quality, so keep that in mind if you go this route.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.retrotink.com/product-page/retrotink-2x-pro"
    >
      <strong className='colorSwap'>RetroTINK 2X-Pro</strong>
    </a>
    <strong className='colorSwap'>:</strong> the middle of the pack in terms of upscalers, this is what many 
    recording setups at major tournaments will use. While it's quite the price increase 
    compared to the GBS, the 2X-Pro is a much simpler plug-and-play solution. The 2X-Pro 
    will line double content to 480p, though don't be fooled - no method of deinterlacing 
    will look nearly as clean as a direct 480p signal. For better results, you'll want to 
    move up to one of the two pricer scalers.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.amazon.com/Source-Converter-SCART-Component-Gaming/dp/B07QF95QP3"
    >
      <strong className='colorSwap'>OSSC</strong>
    </a>
    <strong className='colorSwap'>:</strong> the OSSC is the first scaler that I'd recommend that can upscale 
    the Wii's signal to 1080p. While it's cheaper than the next scaler we'll talk about, 
    it is similar to the GBS in that it requires some manual tweaking and setup to get 
    your feed configured correctly.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.retrotink.com/product-page/5x-pro"
    >
      <strong className='colorSwap'>RetroTINK 5X-Pro</strong>
    </a>
    : the current top of the line scaler for analog signals. With its plethora of inputs, 
    easy 1080p scaling, and excellent handling of 480i, the 5X is what I'd recommend for 
    getting the best quality out of your 480i signal. Many major tournaments these days 
    use the 5X as their upscaler.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.ebay.com/sch/i.html?_nkw=blackmagic+intensity+shuttle&_trksid=p4432023.m4084.l1312&_sacat=0"
    >
      <strong className='colorSwap'>Blackmagic Design Intensity Shuttle</strong>
    </a>
    <strong className='colorSwap'>:</strong> an option I would consider as high risk, high reward. While this 
    does not scale footage on its own, the main draw of this device is that it can take in 
    the Wii's 480p signal, and convert that to 480i for the CRT to receive while retaining 
    480p capture! However, not only is this item now out of production, its software is 
    also notoriously finicky and unreliable. This device also works best in conjunction 
    with a separate scaler - which may be a dealbreaker price-wise for many.
  </li>
</ul>
<hr />
<h2 className='colorSwap' style={{ textAlign: "center" }}>Intermission: Running on Monitor</h2>
<p  className='colorSwap'>
  CRT isn't the only option for running tournaments these days. If your situation makes 
  running on monitors easier (or required), this can be done.
  <strong className='colorSwap'> I would still recommend running on CRT if possible, </strong>
  as monitors will feel different to most players than CRT will. Using a monitor will, on average, 
  introduce half a frame of input lag when set up properly; some players may also be able to 
  feel or see the difference in signal processing of LCD monitors compared to CRTs.
</p>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Make sure you're running on good monitors:</strong> not all monitors are built equal! 
    Anything on the mid-range of gaming monitors should be fine, though. Generally, ASUS and ViewSonic 
    are solid brands, and anything 120hz or over will be serviceable.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Get reliable Wii2HDMI units:</strong> like monitors, not all of these are built equal, either.{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.aliexpress.us/item/2251832645592280.html?gatewayAdapt=glo2usa4itemAdapt&_randl_shipto=US"
    >
      These ones
    </a>{" "}
    are known to be good, but most units on places such as Amazon should be fine as well. Make sure to 
    avoid any with "720p/1080p" switches on them!
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Swap your Wii to output 480p</strong> to make sure you're getting the best output out of these devices!
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    For capture, most if not all regular capture cards will work. I'd recommend the{" "}
    <strong className='colorSwap'>AverMedia Live Gamer Portable 2</strong> and the <strong className='colorSwap'>Elgato HD 60S+</strong>.
  </li>
</ul>
<hr />
<h2 className='colorSwap' style={{ textAlign: "center" }}>Advanced</h2>
<p  className='colorSwap'>
  Interested in getting the absolute best capture quality out of your console? This is the section for you!
</p>
<p  className='colorSwap'>
  This section will focus primarily around getting 480p output from your Wii, while still having players compete on CRT.
</p>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Finding a compatible CRT:</strong> Unfortunately, not many consumer CRTs out there will support 480p, as it only became a widely used standard right at the end of the CRT's mainstream production. If you're lucky, you can find a higher-end PVM (Production Video Monitor) or BVM (Broadcast Video Monitor) for this purpose. However, the more likely (and much cheaper) option is to get a PC CRT monitor. These were everywhere in the 90s and early 2000s, so there are plenty of units still out in the wild. I'd recommend checking Facebook Marketplace and Craigslist on a regular basis if you're looking to get one; they frequently pop up listed for low prices (or even free) on those sites. The rest of this section will work under the assumption that you're using this method.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Getting the Wii's video to your PC CRT:</strong> many PC CRT monitors have a hardwired VGA as their only video input, which means you'll need to convert the Wii's output to that format. If they're in stock, I recommend the handmade adapters from{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.ebay.com/usr/wakabavideo"
    >
      this seller on eBay
    </a>
    , but the{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.beharbros.com/product-page/garo-lite"
    >
      GARO Lite
    </a>{" "}
    should also be a good choice. Refer to the <strong className='colorSwap'>Intermediate</strong> section for splitting your component signal to both your CRT and capture device.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <strong className='colorSwap'>Capturing your 480p signal:</strong> this is the part that gets expensive! Only the latter two scalers mentioned in the <strong className='colorSwap'>Intermediate</strong> section will accept a 480p signal, which means you'll be spending a bit of money to get your capture going. Alternatively, you could split your VGA signal to both the monitor and to HDMI, though you'll only get unscaled 480p that way, which I wouldn't recommend with analog video.
  </li>
</ul>
<ul style={{ textAlign: "left" }}>
  <li className='colorSwap'>
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://electron-shepherd.com/products/ave-hdmi-kit"
    >
      <strong className='colorSwap'>AVE-HDMI, the cream of the crop</strong>
    </a>
    <strong className='colorSwap'>:</strong> the best possible option you can use as of writing is having the AVE-HDMI installed in your console. This is a hardware mod that will pull video signal directly from the Wii's GPU, and output a pure digital signal through a mini HDMI port on the back. Though expensive, this will remove the need for both a component splitter and an external scaler. Since both the mini HDMI and the native component output can be used at the same time, there's no need to split the signal externally. Also, since the HDMI output is purely digital, no scaler is needed, as scaling digital video is a much simpler process that can be handled exclusively by your capture card and/or OBS. This is the option that I now use, and you can see video samples in the{" "}
    <a
      id="articleLink"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.youtube.com/watch?v=aXSAPmMvO74"
    >
      Blacklisted 8 stream VODs
    </a>
    .
  </li>
</ul>
<hr />
<h2 className='colorSwap' style={{ textAlign: "center" }}>Capturing and Recording Your Feed</h2>
<p  className='colorSwap'>
  Capture is a lot simpler than doing the upscaling and getting it to your players; any traditional capture card should work in most cases. The{" "}
  <strong className='colorSwap'>AverMedia Live Gamer Portable 2</strong> and the <strong className='colorSwap'>Elgato HD 60S+</strong> mentioned earlier are both good options, though Elgato products may not always play nice with RetroTINK products. To record and stream, you’ll want to use{" "}
  <a
    id="articleLink"
    target="_blank"
    rel="noopener noreferrer"
    href="https://obsproject.com/"
  >
    <strong className='colorSwap'>OBS Studio</strong>
    </a>. You can add your game capture by adding a “Video Capture Device” source, then selecting your capture card. For proper scaling in the normal (4:3-like) aspect ratio, I’d recommend using a screenshot from Dolphin, then attempting to match it manually via scaling in OBS. Here’s one for your use (
<a 
  id="articleLink" 
  target="_blank" 
  rel="noopener noreferrer" 
  href="https://i.imgur.com/XiaD5Zd.png"
>
  https://i.imgur.com/XiaD5Zd.png
</a>
):
</p>


<div id="imgContainer">
          <ImageZoom
            imgId="reImg3"
            src="https://github.com/pkzstar/plus-side/blob/main/images/Article-images/console-capture/AspectTemplate.png?raw=true" 
            alt="S-Video sample"
            className="article-body-image article-body-image-console"
            tabIndex="0"
          />
          </div>
<p  className='colorSwap'>If you’re on monitor and using PM’s widescreen mode, no adjustment should be necessary from your capture device.</p>
<p  className='colorSwap'>For spicing things up, a great starting point is 
  <a 
    id="articleLink" 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://github.com/ilikepizza107/Project-Plus-Stream-Tool"
  >
   &nbsp;ilikepizza107’s Stream Tool
  </a>. 
  This will give you a clean layout for both regular and widescreen views. This tool is also incredibly customizable with enough know-how, so you can make some pretty derivative layouts with its feature-rich base! More in-depth instructions for usage can be found on the GitHub page.
</p>


        </div>
    </div>
  );
};

export default ConsoleCapture;
