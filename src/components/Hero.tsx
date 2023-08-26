"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { heroPaths } from "@/utils/externalAssetsHub";

export default function Hero() {
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
        {heroPaths.map((image, index) => (
          <div className="h-full sm:h-96 md:h-[35rem] bg-black" key={index}>
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
