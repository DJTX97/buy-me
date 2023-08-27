
interface FilterButtonProps {
    filter: string;
}

export default function FilterButton({filter}:FilterButtonProps) {
  return (
    <div>
      <button className="p-2 rounded-lg bg-gray-300 text-black">{filter}</button>
    </div>
  )
}
