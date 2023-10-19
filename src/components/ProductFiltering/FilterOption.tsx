"use client"

interface FilterOptionProps {
  filter: string;
}

export default function FilterOption({ filter }: FilterOptionProps) {
  return <option className="p-2 rounded-lg">{filter}</option>;
}
