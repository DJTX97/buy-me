import FilterSelect from "./FilterSelect";

export default function ProductFilterBar() {
  return (
    <div className="flex items-center gap-5 w-full my-6 px-6 py-3 rounded-xl bg-slate-500 text-white">
      <div className="text-xl">Sort by:</div>
      <FilterSelect usable={true}/>
    </div>
  );
}
