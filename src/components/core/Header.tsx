import CartButton from "../Cart/CartButton";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between pl-2 pr-20 py-3 bg-slate-500 shadow-lg">
      <Link href={"/"}>
        <div className="">
          <img
            className="h-12 sm:h-14 md:h-16 2xl:h-28"
            src="/assets/favicon/brand.png"
            alt=""
          />
        </div>
      </Link>
      <SearchBar />
      <div className="flex gap-10">
        <CartButton />
        {/*FUTURE UPDATE*/}
        {/* <button className="flex items-center gap-2 text-white">
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
        </button> */}
      </div>
    </div>
  );
}
