import PatronsList from "../components/patronsList";


function PatronsPage() {

    return(
    <>
          <div className="wallpaper"></div>
          <div className="wallpaper2"></div>

          <div className="upcomingImageParent">
        <h1 id="pageHeader" className="textGradient">PATRONS</h1>
      </div>

          <PatronsList/>

          <div className="patronsCenterImg">
  <a href="https://www.patreon.com/PlusSide" target="_blank" rel="noopener noreferrer">
    <img 
      className="patronsImg" 
      src="https://github.com/pkzstar/plus-side/blob/main/images/support-us-on-patreon-large.png?raw=true" 
      alt=""/>

<div className="wavesBoth">
  <img 
    className="wave" 
    src="https://github.com/pkzstar/plus-side/blob/main/images/wave-41459%20(3).png?raw=true" 
    alt="" 
  />
  <img 
    className="waveReverse" 
    src="https://github.com/pkzstar/plus-side/blob/main/images/wave-41459%20(3).png?raw=true" 
    alt="" 
  />
</div>
  </a>
</div>

    </>
    );
}

export default PatronsPage