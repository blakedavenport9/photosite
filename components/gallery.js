// components/Gallery.js
import Image from 'next/image';

export default function Gallery({ imagePaths }) {
  return (
    <section>
      <div className="bg-red-500 text-white p-4">
  If this text is red, Tailwind is working.
</div>

      <h1>Sample Gallery</h1>
      <div className="gallery">
        {imagePaths.map((imagePath, index) => (
          <div className="gallery-item" key={index}>
            <Image
              src={imagePath}
              alt={`Sample Image ${index + 1}`}
              width={300}
              height={200}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
