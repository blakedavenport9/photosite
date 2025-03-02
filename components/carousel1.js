'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, autoplay: true, delay: 6000 }, [Autoplay()])

  return (
    <div className="hero" ref={emblaRef}> {/* Apply hero class to container */}
      <div className="embla__container flex w-full h-full">
        <div className="embla__slide flex items-center justify-center w-full h-full">
          <img 
            src="/images/background/DSC00140.jpg" 
            alt="Image 1" 
            className="w-full h-full object-contain"  // Use object-contain for scaling
          />
        </div>
        <div className="embla__slide flex items-center justify-center w-full h-full">
          <img 
            src="/images/background/DSC01386.jpg" 
            alt="Image 2" 
            className="w-full h-full object-contain"  // Use object-contain for scaling
          />
        </div>
        <div className="embla__slide flex items-center justify-center w-full h-full">
          <img 
            src="/images/background/DSC01518.jpg" 
            alt="Image 3" 
            className="w-full h-full object-contain"  // Use object-contain for scaling
          />
        </div>
      </div>
    </div>
  )
}
