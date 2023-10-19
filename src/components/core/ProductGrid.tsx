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
  products: Product[] | undefined;
}

const batchSize = 4; // set item batch size
const initialBatches = 2; //set number of initial batches to load
const initialItemsToShow = batchSize * initialBatches; //calculate number of initial items to show
const threshold = 200; // set scrolling threshold for loading new items

export default function ProductGrid({ products }: ProductGridProps) {
  const [amount, setAmount] = useAtom(counter); //get product amount for adding to cart
  const [criteria] = useAtom(selectedFilter); //get selected filter
  const [filteredProducts, setFilteredProducts] = useState(products ?? []); //track filtered products array
  const [results, setResults] = useState(filteredProducts); //track final results to display
  const [currentBatch, setCurrentBatch] = useState(initialBatches); //track current batch
  const [isLoading, setIsLoading] = useState(false); //track loading state

  //Set default amount for cart
  useEffect(() => {
    setAmount(1);
  }, []);

  useEffect(() => {
    if (products) {
      setCurrentBatch(initialBatches); //reset current batch after filter change
      setFilteredProducts(productFilter(products, criteria)); //reset filtered products after filter change
    }
  }, [products, criteria]);

  useEffect(() => {
    setResults(
      filteredProducts ? filteredProducts.slice(0, initialItemsToShow) : []
    ); //reset the final results array when the filter changes
  }, [filteredProducts]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop; //calculate scroll position
      const documentHeight = document.documentElement.offsetHeight; //get document height
      const isReachedThreshold = scrollPosition >= documentHeight - threshold; //check if the scrolling threshold is reached
      const hasMoreBatches = currentBatch * batchSize < filteredProducts.length; //calculate if there are more batches to load

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
