"use client";
import { useAtom } from "jotai";
import { cart } from "@/providers/CartContext";
import { counter } from "@/providers/AmountTracker";
import { Product } from "@/utils/globalTypes";

interface CartItem {
  product: Product;
  amount: number;
}

interface AddToCartBtnProps {
  product: Product;
  condensed?: boolean;
}

export default function AddToCartBtn({
  product,
  condensed,
}: AddToCartBtnProps) {
  const [cartItems, setCartItems] = useAtom<CartItem[]>(cart) as [
    CartItem[],
    (items: CartItem[]) => void
  ];

  const [amount] = useAtom(counter);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };
  const handleAddToCart = () => {
    if (amount > 0) {
      const cartItem = {
        product,
        amount,
      };
      addToCart(cartItem);
    }
  };
  return (
    <>
      {condensed ? (
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 right-2 flex justify-between w-1/4 lg:w-1/3 mt-2 p-3 rounded-lg bg-black text-white hover:bg-gray-700"
        >
          <div>Buy</div>
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
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="md:mt-10 w-3/4 p-3 rounded-full bg-black text-white self-center hover:bg-gray-700"
        >
          Add to cart
        </button>
      )}
    </>
  );
}
