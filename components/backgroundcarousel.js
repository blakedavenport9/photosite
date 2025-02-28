// components/BackgroundCarousel.js
'use client'; // Mark this component as a client-side component

import { useState, useEffect } from 'react';

export default function BackgroundCarousel({ images }) {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url('/images/background/${images[currentBackground]}')`,
        backgroundSize: 'cover',
        backgroundPosition: '100% center', // Start from the right
        height: '100vh',
        position: 'relative',
        transition: 'background-position 3s ease-in-out', // Smooth transition
      }}
    >
      <div className="hero-text">
        <h1>Sample Text - Your Catchy Headline</h1>
        <p>Here is some sample text describing the image or the content of this section.</p>
      </div>
    </section>
  );
}
