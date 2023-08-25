"use client";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../providers/CartContext";
import CartDisplay from "./CartDisplay";

export default function CartButton() {
  const { cartItems } = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);

  //Check cart content
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <>
      <button
        onClick={() => setShowCart((prev) => !prev)}
        className="relative flex items-center gap-2 text-white"
      >
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

        <div className="">Cart</div>
        {cartItems.length > 0 && (
          <div className="absolute top-3 left-[3.7rem] flex justify-center items-center h-4 w-4 bg-pink-600 rounded-full text-xs">
            {cartItems.length}
          </div>
        )}
      </button>
      {showCart && (
        <CartDisplay showCart={showCart} setShowCart={setShowCart} />
      )}
    </>
  );
}
