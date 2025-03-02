// app/page.js
import fs from 'fs';
import path from 'path';
import Header from '../components/Header';
import BackgroundCarousel from '../components/backgroundcarousel';
import Gallery from '../components/gallery'; // Import the Gallery component

export default async function GalleryPage() {
  // Read the image files from the public/images directory
  const imageDirectory = path.join(process.cwd(), 'public', 'images');
  const imageFiles = fs.readdirSync(imageDirectory);

  // Filter out non-image files (optional)
  const images = imageFiles.filter((file) =>
    file.match(/\.(jpg|jpeg|png|gif)$/i)
  );

  // Generate image paths
  const imagePaths = images.map((file) => `/images/${file}`);

  // Read the background images from the public/images/background directory
  const backgroundDirectory = path.join(process.cwd(), 'public', 'images', 'background');
  const backgroundFiles = fs.readdirSync(backgroundDirectory);

  // Filter for image files in the background folder (optional)
  const backgroundImages = backgroundFiles.filter((file) =>
    file.match(/\.(jpg|jpeg|png|gif)$/i)
  );

  return (
    <div>
      {/* Hero Section with Dynamic Background Image Carousel */}
      <BackgroundCarousel images={backgroundImages} />

      {/* Gallery Section */}
      <Gallery imagePaths={imagePaths} /> {/* Pass the imagePaths to the Gallery component */}
    </div>
  );
}
<div className="bg-red-500 text-white p-4">
  If this text is red, Tailwind is working.
</div>
