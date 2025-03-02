"use client";

import EmblaCarousel from "../../components/carousel1";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Site</h1>
      <EmblaCarousel /> {/* Use the correct component name */}
    </main>
  );
}
