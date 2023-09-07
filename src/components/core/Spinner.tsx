interface SpinnerProps {
  size: string;
  thickness: string;
}

export default function Spinner() {

  return (
    <div
      className={`inline-block animate-spin h-40 w-40 border-[1rem] rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] `}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
