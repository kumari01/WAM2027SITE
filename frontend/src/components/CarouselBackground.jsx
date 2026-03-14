import React, { useState, useEffect } from "react";

export default function CarouselBackground({ images, autoplayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayInterval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel-background">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      <div className="carousel-overlay" />
    </div>
  );
}
