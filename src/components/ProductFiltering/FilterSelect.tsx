"use client";
import { useAtom } from "jotai";
import FilterOption from "./FilterOption";
import { filters, selectedFilter } from "@/providers/FilterTracker";

interface FilterSelectProps {
  usable: boolean;
}

export default function FilterSelect({ usable }: FilterSelectProps) {
  const [options] = useAtom(filters);
  const [option, setOption] = useAtom(selectedFilter);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <select
        className="daisy-select daisy-select-sm text-black"
        disabled={!usable}
        value={option}
        onChange={handleFilterChange}
      >
        {options.map((filter, index) => (
          <FilterOption key={index} filter={filter} />
        ))}
      </select>
    </div>
  );
}
