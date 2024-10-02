import React, { useState } from 'react';

const ImageZoom = ({ imgId, src, alt, className }) => {
  const [isEnlarged, setIsEnlarged] = useState(false); // State to manage image size

  const toggleZoom = () => {
    const img = document.getElementById(imgId);
    if (isEnlarged) {
      // Shrink the image
      img.style.width = '30%'; // Adjust the size as needed
      img.style.height = 'auto';
      img.style.cursor = 'zoom-in'; // Change cursor back to zoom-in
    } else {
      // Enlarge the image
      img.style.width = '70%'; // Adjust the size as needed
      img.style.height = 'auto';
      img.style.cursor = 'zoom-out'; // Change cursor to zoom-out
    }
    setIsEnlarged(!isEnlarged); // Toggle the state
  };

  return (
    <img
      id={imgId}
      src={src}
      alt={alt}
      className={className}
      onClick={toggleZoom}
      style={{ cursor: 'zoom-in', width: '30%', transition: 'width 0.3s ease' }} // Default cursor and initial width
    />
  );
};

export default ImageZoom;
