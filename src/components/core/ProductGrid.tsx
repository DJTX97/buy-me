"use client";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { productFilter, selectedFilter } from "@/providers/FilterTracker";
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

  const [criteria] = useAtom(selectedFilter);
  const [results, setResults] = useState<ProductGridProps[]>(data);

  useEffect(() => {
    setResults(productFilter(data, criteria));

  }, [criteria])


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
      {results.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
