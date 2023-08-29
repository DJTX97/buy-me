"use client";
import { useAtom } from "jotai";
import FilterOption from "./FilterOption";
import { filters} from "@/providers/FilterTracker";

export default function FilterSelect() {

    const [options] = useAtom(filters);

  return (
    <div className="">
      <select className="daisy-select daisy-select-sm text-black">
        {options.map((filter, index) => (
          <FilterOption key={index} filter={filter} />
        ))}
      </select>
    </div>
  );
}
