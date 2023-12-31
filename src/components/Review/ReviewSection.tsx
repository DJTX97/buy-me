"use client";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "@/utils/dataFetchingKit";
import { getRandomUserRating } from "@/utils/dataFakerKit";
import ProductRating from "./StarRating";
import ReviewDate from "./ReviewDate";

interface ReviewSectionProps {
  ratingCount: number;
}

interface Post {
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function ReviewSection({ ratingCount }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Array<Post>>([]);
  const contentRef = useRef<HTMLDivElement>(null); // ref to the content container
  const [batch, setBatch] = useState<number>(5); //reviews to be loaded on next batch

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  //load more handler
  const loadMore = () => {
    setTimeout(scrollToBottom, 40);
    setBatch(batch * 2);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      const data: Post[] = await fetchData(
        `https://jsonplaceholder.typicode.com/comments`
      );

      if (data.length > ratingCount) {
        setReviews(data.slice(0, ratingCount));
      } else {
        setReviews(data);
      }
    };

    fetchReviews();
    //console.log(ratingCount);
  }, [ratingCount]);

  //check for reviews
  // useEffect(() => {
  //   console.log(reviews);
  // }, [reviews]);

  //scroll to top on re-render
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <div className="self-center mt-5 md:m-0 h-[2px] w-11/12 bg-black"></div>
      <div className="px-10" ref={contentRef}>
        <div className="mt-3 text-3xl font-extrabold">Reviews</div>
        <div className="flex flex-col gap-8 p-5 font-normal">
          {reviews.length !== 0 ? (
            reviews.slice(0, batch).map((post, index) => (
              <div
                className="flex flex-col md:flex-row p-3 border-b border-slate-300"
                key={index}
              >
                <div className="flex flex-col justify-center gap-2 md:w-1/6">
                  <div className="">
                    <img
                      src="/assets/user/user-default.png"
                      className="h-14 2xl:h-24 border-2 border-slate-300 rounded-full"
                      alt="profile"
                    />
                  </div>
                  <div className="text-base 2xl:text-3xl font-bold">
                    {post.email.split("@")[0]}
                  </div>
                  <div className="text-xs 2xl:text-xl font-bold opacity-50">
                    <ReviewDate />
                  </div>
                </div>
                <div className="flex flex-col gap-1 2xl:gap-5 md:w-5/6 pb-5">
                  <div className="text-2xl 2xl:text-4xl font-semibold">
                    {post.name}
                  </div>
                  <div className="flex items-center gap-2 text-base 2xl:text-2xl font-bold">
                    Review: <ProductRating rating={getRandomUserRating()} />
                  </div>
                  <div className="text-base 2xl:text-2xl">{post.body}</div>
                </div>
              </div>
            ))
          ) : (
            <div>No reviews available</div>
          )}
        </div>
        {batch < reviews.length && (
          <div className="flex justify-center py-10 md:py-7 2xl:py-14">
            <button
              onClick={loadMore}
              className="px-20 2xl:px-60 py-5 bg-black text-white rounded-full hover:bg-gray-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}
