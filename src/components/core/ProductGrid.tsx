"use client"
import ProductCard from "@/components/core/ProductCard";

interface ProductGridProps {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
  }

export default function ProductGrid({ data }: { data: ProductGridProps[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      P
    </div>
  );
}
