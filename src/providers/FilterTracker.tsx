import { atom } from "jotai";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
}

const OPTIONS = [
  "All",
  "Most Popular",
  "Category",
  "Price (Ascending)",
  "Price (Descending)",
];

export const filters = atom(OPTIONS);

export const selectedFilter = atom(OPTIONS[0]);

//product filtering logic (spread operator creates new array to not mutate the orginal one and keep the filter update in sync with the displayed results)
export const productFilter = (productArray: Product[], filter: string) => {
  switch (filter.toLowerCase()) {
    case "all":
      return productArray;

    case "most popular":
      return [...productArray].sort((a, b) => b.rating - a.rating);

    case "category":
      return [...productArray].sort((a, b) => a.category.localeCompare(b.category));

    case "price (ascending)":
      return [...productArray].sort((a, b) => a.price - b.price);

    case "price (descending)":
      return [...productArray].sort((a, b) => b.price - a.price);

    default:
      throw new Error("Invalid filter value");
  }
};
