"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { cart } from "@/providers/CartContext";
import { Product } from "@/utils/globalTypes";

interface CartItem {
  product: Product;
  amount: number;
}

interface CartDisplayProps {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
}

export default function CartDisplay({
  showCart,
  setShowCart,
}: CartDisplayProps) {


  const [cartItems, setCartItems] = useAtom(cart);

  const [cartTotal, setCartTotal] = useState(0);

  //product removal logic method
  const removeFromCart = (itemIndex: number) => {
    const updatedCartItems = cartItems.filter(
      (item, index) => index !== itemIndex
    );
    setCartItems(updatedCartItems);
  };

  //product remove handler
  const handleDelete = (index: number) => {
    removeFromCart(index);
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCart(false);
    }
    // Calculate the total price
    let totalPrice = 0;
    cartItems.forEach((item: CartItem) => {
      totalPrice += item.product.price * item.amount;
    });
    setCartTotal(totalPrice);
  }, [cartItems]);

  return (
    <>
      {cartItems.length > 0 && showCart && (
        <div className="absolute z-10 top-14 right-10 sm:right-28 md:right-40 flex flex-col gap-3 p-3 rounded-lg border border-slate-300 bg-white shadow-lg">
          {cartItems.map((item: CartItem, index) => {
            return (
              <div
                className="flex gap-3 justify-between font-semibold"
                key={index}
              >
                <img
                  src={item.product.thumbnail}
                  className="h-16 w-16 h self-center"
                  alt="img"
                />
                <div className="w-60 flex items-center text-lg sm:text-xl font-bold">
                  {item.product.title}
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-full">Amount: {item.amount}</div>
                  <div>${item.product.price * item.amount}</div>
                  <div className="flex justify-center h-full w-full">
                    <button
                      onClick={() => {
                        handleDelete(index);
                      }}
                      className="h-8 p-1 bg-black text-white rounded-3xl hover:bg-gray-700"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="text-center text-2xl font-bold text-red-500">
            TOTAL: ${cartTotal}
          </div>
        </div>
      )}
    </>
  );
}
