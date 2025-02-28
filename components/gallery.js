// components/Gallery.js
import Image from 'next/image';

export default function Gallery({ imagePaths }) {
  return (
    <section>
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
