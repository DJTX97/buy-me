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

  //item removal logic
  const removeItemFromCart = (itemIndex: number) => {
    const updatedCartItems = cartItems.filter(
      (item, index) => index !== itemIndex
    );
    setCartItems(updatedCartItems);
  };

  //empty cart logic
  const emptyCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    // Hide cart if it is empty
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
        <div className="absolute z-10 top-16 left-10 sm:left-auto sm:right-12 md:right-40 flex flex-col gap-3 p-3 rounded-lg border border-slate-300 bg-white shadow-lg">
          <div className="flex justify-between py-2 border-b-2 border-slate-200">
            <div className="w-full pl-8 text-center text-2xl font-bold">
              Your shopping cart
            </div>
            <div className="flex justify-end">
              <button onClick={emptyCart} className="bg-red-600 rounded-lg">
                <svg
                  className="h-8 p-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`flex flex-col gap-3 max-h-60 overflow-y-auto`}>
            {cartItems.map((item: CartItem, index) => {
              return (
                <div>
                  <div
                    className="flex gap-3 justify-between font-semibold"
                    key={index}
                  >
                    <img
                      src={item.product.thumbnail}
                      className="h-16 w-16 h self-center"
                      alt="img"
                    />
                    <div className="w-60 flex items-center text-lg sm:text-xl">
                      {item.product.title}
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-full">Amount: {item.amount}</div>
                      <div className="text-red-600 font-bold">
                        ${item.product.price * item.amount}
                      </div>
                      <div className="flex justify-center h-full w-full">
                        <button
                          onClick={() => {
                            removeItemFromCart(index);
                          }}
                          className="h-8 p-1 bg-black text-white rounded-3xl hover:bg-gray-700"
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                  {index !== cartItems.length - 1 && (
                    <div className="h-[2px] mt-2 rounded-2xl bg-slate-200" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-2 border-slate-200 rounded-lg text-center text-2xl font-bold text-red-500">
            TOTAL: ${cartTotal}
          </div>
        </div>
      )}
    </>
  );
}
