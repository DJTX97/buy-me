"use client";
import { useAtom } from "jotai";
import FilterOption from "./FilterOption";
import { filters } from "@/providers/FilterTracker";

interface FilterSelectProps {
  usable: boolean;
}

export default function FilterSelect({ usable }: FilterSelectProps) {
  const [options] = useAtom(filters);

  return (
    <div className="">
      <select className="daisy-select daisy-select-sm text-black" disabled={!usable}>
        {options.map((filter, index) => (
          <FilterOption key={index} filter={filter} />
        ))}
      </select>
    </div>
  );
}
