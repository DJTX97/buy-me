import Link from "next/link";
import ProductRating from "./ProductRating";

interface ProductCardProps {
  product: {
    id:number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.category}/${product.id}`}>
    <div className="flex flex-col items-center p-2 border border-black h-96 2xl:h-2/3 rounded-lg bg-white hover:bg-gray-500 hover:opacity-90 hover:text-white hover:scale-105 hover:cursor-pointer transition-all duration-110">
      <img
        src={product.image}
        className="h-3/4 w-full rounded-lg"
        alt="image"
      />
      <div className="h-1/2 w-full p-2 rounded-b-lg">
        <div className="font-bold">{product.title}</div>
        <div className="italic">{product.category}</div>
        <div className="font-bold">Price: ${product.price}</div>
        <div className="flex gap-1 font-bold">
          Rating:
          <ProductRating rating={product.rating.rate} />
          {product.rating.rate}
        </div>
      </div>
    </div>
    </Link>
  );
}
