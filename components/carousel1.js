'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const images = [
  '/images/background/DSC01386.jpg',
  '/images/background/DSC01518.jpg',
  '/images/background/12345.jpg'
]

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, autoplay: true, delay: 6000 }, [Autoplay()])

  return (
    <div className="relative w-full h-screen"> {/* Fullscreen container */}
      {/* Overlay Header */}
      <div className="hero-text">
       <h1>"It is good to be curious about many things."</h1>
       <p>- Mr. Rogers</p>
      </div>

      {/* Embla Carousel */}
      <div className="hero w-full h-full" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
