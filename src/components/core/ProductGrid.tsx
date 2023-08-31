"use client";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { productFilter, selectedFilter } from "@/providers/FilterTracker";
import { counter } from "@/providers/AmountTracker";
import ProductCard from "@/components/core/ProductCard";
import { Product } from "@/utils/globalTypes";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {

  const [amount, setAmount] = useAtom(counter);

  const [criteria] = useAtom(selectedFilter);
  const [results, setResults] = useState(products);

  useEffect(() => {
    setAmount(1);
  }, [])

  useEffect(() => {
    setResults(productFilter(products, criteria));

  }, [criteria])


  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
      {results.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
