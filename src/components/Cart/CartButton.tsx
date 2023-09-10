"use client";
import { useState } from "react";
import { useAtom } from "jotai";
import { AnimatePresence } from "framer-motion";
import { cart } from "@/providers/CartContext";
import CartDisplay from "./CartDisplay";
import { checkoutStatus } from "@/providers/CartContext";
import CheckoutModal from "./CheckoutModal";
export default function CartButton() {
  const [cartItems, setCartItems] = useAtom(cart);
  const [checkedOut, setCheckedOut] = useAtom(checkoutStatus);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  //Check cart content
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <div>
      <button
        onClick={handleShowCart}
        className="relative flex items-center gap-2 2xl:gap-3 text-white"
      >
        <svg
          className="h-6 2xl:h-12"
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

        <div className="hidden md:block 2xl:text-4xl">Cart</div>
        {cartItems.length > 0 && (
          <div className="absolute top-3 left-5 md:left-[3.7rem] 2xl:top-8 2xl:left-28 flex justify-center items-center h-4 2xl:h-8 w-4 2xl:w-8 bg-pink-600 rounded-full text-xs 2xl:text-2xl">
            {cartItems.length}
          </div>
        )}
      </button>
      <AnimatePresence>
        {showCart && (
          <CartDisplay
            key="cart"
            showCart={showCart}
            setShowCart={setShowCart}
          />
        )}
      {checkedOut && <CheckoutModal />}
      </AnimatePresence>
    </div>
  );
}
