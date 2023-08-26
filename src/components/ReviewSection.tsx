"use client";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "@/utils/dataFetchingKit";
import ProductRating from "./ProductRating";

interface ReviewSectionProps {
  reviewCount: number;
}

interface Post {
  id: string;
  name: string;
  email: string;
  body: string;
}

const reviewsPerBatch = 5;

export default function ReviewSection({ reviewCount }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Array<Post>>([]);
  const contentRef = useRef<HTMLDivElement>(null); // ref to the content container
  const [next, setNext] = useState<number>(reviewsPerBatch); //reviews to be loaded on next batch

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  //load more handler
  const loadMore = () => {
    setTimeout(scrollToBottom, 40);
    setNext(next + reviewsPerBatch);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const data: Post[] = await fetchData(
        `https://jsonplaceholder.typicode.com/comments`
      );

      if (data.length > reviewCount) {
        setReviews(data.slice(0, reviewCount));
      } else {
        setReviews(data);
      }
    };

    fetchReviews();
  }, []);

  //check for reviews
  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  //scroll to top on re-render
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  //Get random rating
  const randomRating = () => Math.floor(Math.random() * 5) + 1;

  return (
    <>
      <div className="self-center mt-5 md:m-0 h-[2px] w-11/12 bg-black"></div>
      <div className="px-10" ref={contentRef}>
        <div className="mt-3 text-3xl font-extrabold">Reviews</div>
        <div className="flex flex-col gap-8 p-5 font-normal">
          {reviews.length !== 0 ? (
            reviews.slice(0, next).map((post, index) => (
              <div className="flex border-b border-slate-300" key={index}>
                <div className="flex flex-col justify-center gap-2 w-1/6">
                  <div>
                    <img
                      src="/assets/user/user-default.png"
                      className="h-14 border-2 border-slate-300 rounded-full"
                      alt="profile"
                    />
                  </div>
                  <div className="text-base font-bold">
                    {post.email.split("@")[0]}
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-5/6 pb-5">
                  <div className="text-xl font-semibold">{post.name}</div>
                  <div className="flex gap-2 text-base font-bold">
                    Review: <ProductRating rating={randomRating()} />
                  </div>
                  <div className="text-base">{post.body}</div>
                </div>
              </div>
            ))
          ) : (
            <div>No reviews available</div>
          )}
        </div>
        {next < reviews.length && (
          <div className="flex justify-center py-10 md:py-7 2xl:py-14">
            <button
              onClick={loadMore}
              className="p-5 bg-black text-white rounded-full hover:bg-gray-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
