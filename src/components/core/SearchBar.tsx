"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchData } from "@/utils/dataFetchingKit";
import { Product } from "@/utils/globalTypes";

export default function SearchBar() {
  const router = useRouter();

  const [products, setProducts] = useState<Array<Product>>([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData("https://dummyjson.com/products?limit=100");
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  // Navigate to product page if input matches product
  const handleButtonClick = () => {
    const matchingProduct = products.find(
      (product) => product.title.toLowerCase() === search.toLowerCase()
    );

    if (matchingProduct) {
      router.push(
        `/products/${matchingProduct.category}/${matchingProduct.id}`
      );
    }
  };

  //Clear input after clicking anywhere on page
  useEffect(() => {
    const handleClick = () => {
      setSearch("");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //console.log(products);
  return (
    <>
      <div className="flex w-1/2 bg-white rounded-full">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 2xl:h-16 w-full px-3 2xl:px-6 border-y border-l border-black rounded-l-full 2xl:text-3xl outline-none"
        />
        <button
          onClick={handleButtonClick}
          className="flex justify-center items-center w-12 2xl:w-20 border-y border-r border-black rounded-r-full hover:bg-gray-200"
        >
          <svg
            className="h-4 2xl:h-6 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      {search && (
        <div className="absolute z-10 top-14 md:top-16 2xl:top-24 left-5 md:left-32 lg:left-64 2xl:left-[38rem] lg:w-[35rem] rounded-lg bg-white shadow-lg 2xl:text-3xl">
          {products
            .filter(
              (product) =>
                product.title
                  .toLowerCase()
                  .split(" ") //Split the product name into an array of words
                  .some((word) => word.startsWith(search.toLowerCase())) //Check each word in the product name if it matches the input value
            )
            .map((product) => (
              <Link href={`/products/${product.category}/${product.id}`}>
                <div
                  key={product.id}
                  className="p-3 2xl:p-5 border-t border-gray-200 rounded-lg hover:bg-gray-200"
                >
                  {product.title}
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
}
