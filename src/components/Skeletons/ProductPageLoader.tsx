export default function ProductPageLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] border border-black bg-white rounded-xl">
      <div
        className="inline-block h-40 w-40 animate-spin rounded-full border-[1rem] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
