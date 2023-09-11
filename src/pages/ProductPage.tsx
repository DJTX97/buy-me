import ProductRating from "@/components/Review/StarRating";
import AddToCartBtn from "@/components/Cart/AddToCartBtn";
import AmountCounter from "@/components/Cart/AmountCounter";
import ReviewSection from "@/components/Review/ReviewSection";
import { Product } from "@/utils/globalTypes";

interface ReviewedProduct extends Product {
  reviewCount: number;
}

interface ProductPageProps {
  product: ReviewedProduct;
}

export default function ProductPage({ product }: ProductPageProps) {
  //console.log(product);
  return (
    <div className="flex flex-col border border-black bg-white rounded-xl text-2xl font-semibold">
      <div className="p-8 text-3xl md:text-6xl">{product.title}</div>
      <div className="flex flex-col lg:flex-row">
        <img
          className="h-80 sm:h-96 md:h-[28rem] lg:w-1/2 2xl:h-[40rem] m-10 lg:m-5 sm:p-10"
          src={product.thumbnail}
          alt="image"
        />
        <div className="flex flex-col gap-5 2xl:gap-10 lg:w-1/2 2xl:h-[40rem] 2xl:text-4xl mx-10 md:my-7 p-5 border-2 border-black rounded-xl">
          <div className="md:flex items-center gap-2">
            <div className="font-extrabold">Category:</div> {product.category}
          </div>
          <div className="md:flex items-center gap-2">
            <div className="font-extrabold">Rating:</div>
            <ProductRating rating={product.rating ?? "N/A"} />{" "}
            <div className="flex items-center border-b-2 border-black border-dotted text-lg 2xl:text-3xl">
              {product.rating} ({product.reviewCount} reviews)
            </div>
          </div>
          <div className="flex gap-3">
            <div className="font-extrabold">Price:</div>{" "}
            <div className="font-bold text-red-500">${product.price}</div>
          </div>
          <AmountCounter />
          <AddToCartBtn product={product} condensed={false} />
        </div>
      </div>
      <div className="self-center mt-5 md:m-0 h-[2px] w-11/12 bg-black"></div>
      <div className="flex flex-col gap-3 px-10 my-5 md:mb-5 md:mt-2">
        <div className="text-3xl font-extrabold">Details:</div>
        <div className="font-normal">{product.description}</div>
      </div>
      <ReviewSection ratingCount={product.reviewCount} />
    </div>
  );
}
