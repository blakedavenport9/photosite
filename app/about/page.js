"use client";

import EmblaCarousel from "../../components/carousel1";

export function ScrollDownIndicator() {
  const handleScroll = () => {
    console.log("Arrow clicked!"); // Debugging
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      console.log("Found section, scrolling...");
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found!");
    }
  };

  return (
    <div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
      onClick={handleScroll}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 48 24"
        strokeWidth="3"
        stroke="lightgray"
        className="w-16 h-8 transform -translate-x-1/2 translate-y-1/2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l20 16 20-16" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <main className="flex flex-col items-center justify-center min-h-screen relative">
        <EmblaCarousel />
        {/* ScrollDownIndicator should be centered here */}
        <div className="relative w-full">
        <ScrollDownIndicator />
        </div>
      </main>

      <section id="next-section" className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="p-20">Target text</div>
      </section>
      <section class="flex justify-center items-center min-h-screen bg-gray-200">
      <div class="w-32 h-32 bg-blue-500 transform -translate-x-1/2">
     Test
  </div>

      </section>
    </div>
  );
}
