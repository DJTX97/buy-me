export default function SearchBar() {
  return (
    <div className="flex w-1/2 bg-white rounded-2xl">
      <input
        type="text"
        className="h-10 w-full px-3 border-y border-l border-black rounded-l-2xl outline-none"
      />
      <button className="flex justify-center items-center w-12 border-y border-r border-black rounded-r-2xl hover:bg-gray-200">
        <svg
          className="h-4 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
