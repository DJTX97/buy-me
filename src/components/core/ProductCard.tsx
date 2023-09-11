import Link from "next/link";
import ProductRating from "../Review/StarRating";
import AddToCartBtn from "../Cart/AddToCartBtn";
import { Product } from "@/utils/globalTypes";
import { motion as m } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productPageUrl = `/products/${product.category}/${product.id}`;

  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.11 } }}
      className="relative flex flex-col items-center p-2 border border-black h-96 lg:h-[28rem] 2xl:h-[46rem] rounded-lg bg-white hover:bg-gray-500 hover:opacity-90 hover:text-white transition-colors duration-110"
    >
      <Link className="h-1/2 2xl:h-[24rem] w-full" href={productPageUrl}>
        <img
          src={product.thumbnail}
          className="h-full w-full rounded-lg"
          alt=""
        />

        <div className="flex flex-col gap-1 2xl:gap-3 h-full w-full p-2 rounded-b-lg 2xl:text-3xl">
          <div className="font-bold">{product.title}</div>
          <div className="italic">{product.category}</div>
          <div className="font-bold">Price: ${product.price}</div>
          <div className="flex items-center gap-1 font-bold">
            Rating:
            <ProductRating rating={product.rating} />
            {product.rating}
          </div>
        </div>
      </Link>
      <AddToCartBtn product={product} condensed />
    </m.div>
  );
}
