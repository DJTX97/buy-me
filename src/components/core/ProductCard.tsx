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
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-2 border border-black h-96 2xl:h-2/3 rounded-lg bg-white hover:bg-gray-500 hover:opacity-90 hover:text-white hover:scale-105 transition-all duration-110"
    >
      <Link className="h-1/2 w-full" href={productPageUrl}>
        <img
          src={product.thumbnail}
          className="h-full w-full rounded-lg"
          alt=""
        />
      </Link>
      <div className="relative flex flex-col h-1/2 w-full p-2 rounded-b-lg">
        <Link href={productPageUrl}>
          <div className="font-bold">{product.title}</div>
          <div className="italic">{product.category}</div>
          <div className="font-bold">Price: ${product.price}</div>
          <div className="flex gap-1 font-bold">
            Rating:
            <ProductRating rating={product.rating} />
            {product.rating}
          </div>
        </Link>
        <AddToCartBtn product={product} condensed />
      </div>
    </m.div>
  );
}
