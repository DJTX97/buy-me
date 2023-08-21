"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
  const images = [
    "/assets/hero/woman_sales.jpg",
    "/assets/hero/discount.jpg",
    "/assets/hero/cyber-monday-retail-sales.jpg",
    "/assets/hero/wordcloud2.png",
    "/assets/hero/Ventura-5Reasons-Featured-r1.jpg",
  ];

  return (
    <div className="mb-10">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        className="border-4 border-black rounded-lg"
      >
        {images.map((image, index) => (
          <div className="h-[35rem] bg-black" key={index}>
            <img
              className="h-full rounded-lg"
              src={image}
              alt={`Carousel Image ${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
