import React, { useState, useEffect, useRef } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
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
    
    const bgColor = theme === 'dark' ? 'black' : 'white';
    const textColor = theme === 'dark' ? 'white' : 'black';
    document.body.style.backgroundColor = bgColor;
    document.querySelectorAll('.pastEventsHeader, .patrons, .donorName').forEach(el => el.style.color = textColor);
    
    const imageUrl = theme === 'dark' 
      ? 'https://raw.githubusercontent.com/pkzstar/plus-side/96e3c064c37da4290e7c24a7c7b6c1cc8ea2c8cb/images/imageLight.png' 
      : 'https://github.com/pkzstar/plus-side/blob/main/images/bg100.png?raw=true';
      
    document.querySelectorAll('.wallpaper, .wallpaper2').forEach(el => el.style.backgroundImage = `url('${imageUrl}')`);
  }, [theme]);

  return (
    <div>
      <img
        ref={bulbRef}
        className="lightBulb"
        alt="Light Bulb"
        onClick={toggleTheme}
      />
      {/* Add other elements/components here */}
    </div>
  );
};

export default ThemeToggleComponent;
