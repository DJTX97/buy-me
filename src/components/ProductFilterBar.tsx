import FilterButton from "./FilterButton";

const filters = [
    "All",
    "Most Popular",
    "Category",
    "Price (Ascending)",
    "Price (Descending)",
]

export default function ProductFilterBar() {
  return (
    <div className="flex items-center gap-5 w-full my-6 px-6 py-3 bg-slate-500 text-white">
      <div className="text-xl">Sort by:</div>
      <div className="flex gap-2">
        {filters.map((filter, index) => (
          <FilterButton key={index} filter={filter} />
        ))}
      </div>
    </div>
  );
}
