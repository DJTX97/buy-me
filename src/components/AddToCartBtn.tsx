"use client";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContext";
import { AmountContext } from "@/providers/AmountTracker";

interface AddToCartBtnProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
  };
}

export default function AddToCartBtn({ product }: AddToCartBtnProps) {
  const { addToCart } = useContext(CartContext);

  const { amount } = useContext(AmountContext);
  const handleAddToCart = () => {
    if (amount > 0) {
      const cartItem = {
        product,
        amount,
      };
      addToCart(cartItem);
    }
    //console.log(product);
  };
  return (
    <button
      onClick={handleAddToCart}
      className="md:mt-10 w-3/4 p-3 rounded-full bg-black text-white self-center hover:bg-gray-700"
    >
      Add to cart
    </button>
  );
}
