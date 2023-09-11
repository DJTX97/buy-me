import FilterSelect from "@/components/ProductFiltering/FilterSelect";
import HeroLoader from "./HeroLoader";


export default function HomePageLoader() {
  return (
    <div className="flex flex-col items-center">
      <HeroLoader />
      <div className="flex items-center gap-5 w-full my-6 px-6 py-3 rounded-xl bg-slate-500 text-white">
        <div className="text-xl">Sort by:</div>
        <FilterSelect usable={false} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0 w-full">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 border border-black h-96 w-full 2xl:h-2/3 rounded-lg bg-white"
          >
            <div className="h-1/2 w-full rounded-lg bg-gray-300 animate-pulse"></div>
            <div className="relative flex flex-col gap-1 h-1/2 w-full p-2 rounded-b-lg">
              <div className="h-5 w-1/2 rounded-lg bg-gray-300 animate-pulse"></div>
              <div className="h-5 w-1/2 rounded-lg bg-gray-300 animate-pulse"></div>
              <div className="h-5 w-1/2 rounded-lg bg-gray-300 animate-pulse"></div>
              <div className="h-5 w-5/6 rounded-lg bg-gray-300 animate-pulse"></div>
              <div className="absolute bottom-0 right-2 h-12 w-1/4 lg:w-1/3 mt-2 p-3 rounded-lg bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
