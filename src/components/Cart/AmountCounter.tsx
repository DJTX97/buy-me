"use client";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { counter } from "@/providers/AmountTracker";

export default function AmountCounter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [amount, setAmount] = useAtom(counter);

  //Reset amount to 1 on page refresh
  useEffect(() => {
    setAmount(1);
  }, []);

  //Reset amount to 1 when clicking outside the input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setAmount(1);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //Set event.target.value to empty string to let user input the amount
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = "";
  };

  const incrementAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decrementAmount = () => {
    amount > 1 && setAmount((prev) => prev - 1);
  };

  const updateAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]*$/;

    // if value is not blank, then test the regex
    if (parseInt(event.target.value, 10) === 0 || re.test(event.target.value)) {
      setAmount(parseInt(event.target.value, 10));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row md:w-1/4 lg:w-1/2" ref={inputRef}>
      <div className="font-extrabold">Amount:</div>
      {/* Large screen input */}
      <div className="hidden sm:flex ml-2 text-base 2xl:text-3xl">
        <button
          onClick={decrementAmount}
          className="h-full w-7 2xl:w-14 px-2 rounded-l-xl bg-gray-300 hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="text"
          value={Number.isNaN(amount) ? "" : amount}
          onChange={updateAmount}
          onClick={handleInputClick}
          className="h-full w-20 2xl:w-40 px-2 border border-black outline-none 2xl:p-2"
        />
        <button
          onClick={incrementAmount}
          className="h-full w-7 2xl:w-14 px-2 rounded-r-xl bg-gray-300 hover:bg-gray-200"
        >
          +
        </button>
      </div>
      {/* Small screen input */}
      <div className="flex flex-col items-center gap-5 sm:hidden mt-2 text-base">
        <input
          type="text"
          value={Number.isNaN(amount) ? "" : amount}
          onChange={updateAmount}
          onClick={handleInputClick}
          className="h-full w-full px-3 py-1 border border-black rounded-full outline-none"
        />
        <div className="flex justify-center gap-10 w-full">
          <button
            onClick={decrementAmount}
            className="h-full w-20 p-2 rounded-full bg-gray-300 hover:bg-gray-200"
          >
            -
          </button>
          <button
            onClick={incrementAmount}
            className="h-full w-20 p-2 rounded-full bg-gray-300 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
