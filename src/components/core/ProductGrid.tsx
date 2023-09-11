"use client";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { AnimatePresence } from "framer-motion";
import { productFilter, selectedFilter } from "@/providers/FilterTracker";
import { counter } from "@/providers/AmountTracker";
import ProductCard from "@/components/core/ProductCard";
import { Product } from "@/utils/globalTypes";
import Spinner from "./Spinner";

interface ProductGridProps {
  products: Product[];
}

const initialItemsToShow = 8;
const batchSize = 4;
const threshold = 200; // Adjust this value as per your requirements

export default function ProductGrid({ products }: ProductGridProps) {
  const [amount, setAmount] = useAtom(counter);
  const [criteria] = useAtom(selectedFilter);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [results, setResults] = useState(filteredProducts.slice(0, batchSize));
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
      const hasMoreBatches = currentBatch * batchSize < filteredProducts.length;

      if (isReachedThreshold && !isLoading && hasMoreBatches) {
        setIsLoading(true);
        const startIndex = currentBatch * batchSize;
        const endIndex = startIndex + batchSize;
        const nextBatch = filteredProducts.slice(startIndex, endIndex);

        // Simulate loading delay
        //setTimeout(() => {
          setResults((prevResults) => [...prevResults, ...nextBatch]);
          setCurrentBatch((prevBatchNumber) => prevBatchNumber + 1);
          setIsLoading(false);
        //}, 500);
      } else if (!hasMoreBatches) {
        setIsLoading(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filteredProducts, currentBatch, isLoading]);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-10">
      <AnimatePresence>
        {results.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </AnimatePresence>
      {isLoading && (
        <div className="col-span-full text-center p-8 border rounded-lg border-black bg-white">
          <Spinner />
        </div>
      )}
    </div>
  );
}
