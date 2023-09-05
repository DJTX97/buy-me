import Spinner from "@/components/core/Spinner";

export default function ProductPageLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] border border-black bg-white rounded-xl">
      <Spinner size={40} thickness="1rem"/>
    </div>
  );
}
