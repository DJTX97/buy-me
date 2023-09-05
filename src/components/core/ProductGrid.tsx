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

const initialItemsToShow = 8;
const batchSize = 8;
const threshold = 100; // Adjust this value as per your requirements

export default function ProductGrid({ products }: ProductGridProps) {
  const [amount, setAmount] = useAtom(counter);
  const [criteria] = useAtom(selectedFilter);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [results, setResults] = useState(
    filteredProducts.slice(0, initialItemsToShow)
  );
  const [currentBatch, setCurrentBatch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAmount(1);
  }, []);

  useEffect(() => {
    setFilteredProducts(productFilter(products, criteria));
    setCurrentBatch(1);
  }, [products, criteria]);

  useEffect(() => {
    setResults(filteredProducts.slice(0, initialItemsToShow));
    setCurrentBatch(1);
  }, [filteredProducts]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const documentHeight = document.documentElement.offsetHeight;
      const isReachedThreshold = scrollPosition >= documentHeight - threshold;

      if (isReachedThreshold && !isLoading) {
        setIsLoading(true);
        const startIndex = currentBatch * batchSize;
        const endIndex = startIndex + batchSize;
        const nextBatch = filteredProducts.slice(startIndex, endIndex);

        // Simulate loading delay (replace with your actual data fetching logic)
        setTimeout(() => {
          setResults((prevResults) => [...prevResults, ...nextBatch]);
          setCurrentBatch((prevBatchNumber) => prevBatchNumber + 1);
          setIsLoading(false);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filteredProducts, currentBatch, isLoading]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
      {results.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      {isLoading && <div>Loading...</div>} {/* Show a loading indicator */}
    </div>
  );
}
