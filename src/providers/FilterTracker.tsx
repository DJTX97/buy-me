import { atom } from "jotai";

export const filters = atom([
  "All",
  "Most Popular",
  "Category",
  "Price (Ascending)",
  "Price (Descending)",
]);

export const selectedFilter = atom("All");
