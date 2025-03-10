import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loaging, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loaging) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: "10px" }}>
            <img
              src={`https://picsum.photos/id/${image.id}/300/200`}
              alt={image.author}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
            <p>Photo by {image.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
