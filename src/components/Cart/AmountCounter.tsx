"use client";
import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { counter } from "@/providers/AmountTracker";

export default function AmountCounter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [amount, setAmount] = useAtom(counter);

  //Reset amount to 1
  useEffect(() => {
    setAmount(1);
  }, []);

  //Set event.target.value to empty string to let user input the amount
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
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
    <div className="flex flex-col sm:flex-row">
      <div className="font-extrabold">Amount:</div>
      {/* Large screen input */}
      <div className="hidden sm:flex ml-2 text-base">
        <button
          onClick={decrementAmount}
          className="h-full w-7 px-2 bg-gray-300 hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="text"
          value={Number.isNaN(amount) ? "" : amount}
          ref={inputRef}
          onChange={updateAmount}
          onClick={handleClick}
          style={{
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "textfield",
          }}
          className="h-full w-20 px-2 border border-black outline-none"
        />
        <button
          onClick={incrementAmount}
          className="h-full w-7 px-2 bg-gray-300 hover:bg-gray-200"
        >
          +
        </button>
      </div>
      {/* Small screen input */}
      <div className="flex flex-col items-center gap-5 sm:hidden mt-2 text-base">
        <input
          type="text"
          value={Number.isNaN(amount) ? "" : amount}
          ref={inputRef}
          onChange={updateAmount}
          onClick={handleClick}
          style={{
            appearance: "textfield",
            MozAppearance: "textfield",
            WebkitAppearance: "textfield",
          }}
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
