import { fetchData } from "@/utils/dataFetchingKit";
import ProductRating from "./ProductRating";

interface Post {
  id: string;
  name: string;
  email: string;
  body: string;
}

export default async function ReviewSection() {
  const data: Post[] = await fetchData(
    `https://jsonplaceholder.typicode.com/comments`
  );
  console.log(data);

  return (
    <>
      <div className="self-center mt-5 md:m-0 h-[2px] w-11/12 bg-black"></div>
      <div className="px-10">
        <div className="mt-3 text-3xl font-extrabold">Reviews</div>
        <div className="flex flex-col gap-5 p-5 font-normal">
          {data.map((post, index) => (
            <div className="flex border-b border-slate-300" key={index}>
              <div className="flex items-center gap-2 w-1/4">
                <div className="">
                  <img
                    src="/assets/user/user-default.png"
                    className="h-14 rounded-full"
                    alt=""
                  />
                </div>
                <div className="text-lg font-bold">
                  {post.email.split("@")[0]}
                </div>
              </div>
              <div className="flex flex-col gap-1 w-3/4 pb-5">
                <div className="text-xl font-semibold">{post.name}</div>
                <div className="flex gap-2 text-base font-bold">
                  Review:{" "}
                  <ProductRating rating={Math.floor(Math.random() * 5) + 1} />
                </div>
                <div className="text-base">{post.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
