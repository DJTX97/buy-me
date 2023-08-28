"use client";
import { useEffect } from "react";
import { useAtom } from "jotai";
import FilterOption from "./FilterOption";
import { filters, selectedFilter } from "@/providers/FilterTracker";

export default function FilterSelect() {

    const [options] = useAtom(filters);
    const [selection, setSelection] = useAtom(selectedFilter);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelection(event.target.value);
    }
    useEffect(() => {
        console.log(selection);
    }, [selection])
  return (
    <div className="">
      <select value={selection} onChange={handleSelectChange} className="daisy-select daisy-select-sm text-black">
        {options.map((filter, index) => (
          <FilterOption key={index} filter={filter} />
        ))}
      </select>
    </div>
  );
}
