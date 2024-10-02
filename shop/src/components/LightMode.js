import React, { useState, useEffect, useRef } from 'react';

// Update background images for wallpapers
function updateBackgroundImages(imageUrl) {
    const wallPapers = document.getElementsByClassName("wallpaperStatic");
    const wallPapers2 = document.getElementsByClassName("wallpaperLightStatic");

    for (let i = 0; i < wallPapers.length; i++) {
        wallPapers[i].style.backgroundImage = `url('${imageUrl}')`;
    }

    for (let i = 0; i < wallPapers2.length; i++) {
        wallPapers2[i].style.backgroundImage = `url('${imageUrl}')`;
    }
}
console.log("dark mode enabled");

const useTheme = () => {
  // Initialize theme based on local storage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark'; 
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // This can remain if you want to sync theme if changed externally
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return { theme, toggleTheme };
};

const ThemeToggleComponent = () => {
  const bulbRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const bulbImage = theme === 'dark' 
      ? 'https://raw.githubusercontent.com/pkzstar/plus-side/8492b4fa5d68b55899473283879884976a77f904/images/bulbDark.png' 
      : 'https://www.emphysys.com/wp-content/uploads/2015/04/iconmonstr-light-bulb-17-icon-256.png';
    bulbRef.current.src = bulbImage;
    
    const oppositeTextColor = theme === 'dark' ? 'black' : 'white';
    
    document.querySelectorAll('.pastEventsHeader, .patrons, .donorName, .colorSwap').forEach(el => el.style.color = oppositeTextColor);
    
    const imageUrl = theme === 'dark' 
      ? 'https://raw.githubusercontent.com/pkzstar/plus-side/96e3c064c37da4290e7c24a7c7b6c1cc8ea2c8cb/images/imageLight.png' 
      : 'https://github.com/pkzstar/plus-side/blob/main/images/bg100.png?raw=true';
      
    document.querySelectorAll('.wallpaper, .wallpaper2').forEach(el => el.style.backgroundImage = `url('${imageUrl}')`);
    
    // Call the updateBackgroundImages function
    updateBackgroundImages(imageUrl);
  }, [theme]);

  return (
    <>
      <img
        ref={bulbRef}
        className="lightBulb"
        alt="Light Bulb"
        onClick={toggleTheme}
      />
      {/* Add other elements/components here */}
    </>
  );
};

export default ThemeToggleComponent;
