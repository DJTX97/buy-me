"use client";
import { useState } from "react";

interface StarRatingProps {
  rating: number;
}

const ProductRating = ({ rating }: StarRatingProps) => {
  //Store the rating in an internal state to avoid changing values in the case of randomized data
  const [stars, setStars] = useState(rating);

  const filledStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  //console.log(filledStars);

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2L9.273 8.182 2 9.273l5.455 4.455L6.182 22 12 18.546 17.818 22l-.273-8.273L22 9.273l-7.273-1.091z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500 fill-current"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="grad">
              <stop offset="50%" stopColor="rgb(234,179,8)" />
              <stop offset="50%" stopColor="lightgrey" />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad)"
            fillRule="evenodd"
            d="M12 2L9.273 8.182 2 9.273l5.455 4.455L6.182 22 12 18.546 17.818 22l-.273-8.273L22 9.273l-7.273-1.091z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default ProductRating;
