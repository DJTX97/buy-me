import { useAtom } from "jotai";
import { selectedFilter } from "@/providers/FilterTracker";

interface FilterOptionProps {
  filter: string;
}

export default function FilterOption({ filter }: FilterOptionProps) {
  const [option, setOption] = useAtom(selectedFilter);
  return (
    <option onClick={() => setOption(filter)} className="p-2 rounded-lg">{filter}</option>
  );
}
