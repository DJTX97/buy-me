import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-slate-500">
      <Link href={"/"}>
        <div>BRAND</div>
      </Link>
      <SearchBar />
      <div className="flex gap-10">
        <button className="flex items-center gap-2 text-white">
          <svg
            className="h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
            />
          </svg>
          <div className="hidden md:block">Cart</div>
        </button>
        <button className="flex items-center gap-2 text-white">
          <svg
            className="h-6"
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
              d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div className="hidden md:block">My account</div>
        </button>
      </div>
    </div>
  );
}
