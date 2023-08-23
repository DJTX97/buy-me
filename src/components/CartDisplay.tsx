"use client";
import { SetStateAction, useContext, useEffect } from "react";
import { CartContext } from "../providers/CartContext";

interface CartDisplayProps {
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>
}

export default function CartDisplay({showCart, setShowCart}: CartDisplayProps) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  //Remove item from cart
  const handleDelete = (id: string) => {
    removeFromCart(id);
  };

  //Check for cart content and hide cart display if empty
  useEffect(() => {
    if (cartItems.length === 0) {
      setShowCart(false);
    }
  },[cartItems]);

  return (
    <>
      {cartItems.length > 0 && showCart && (
        <div className="absolute z-10 top-14 right-10 sm:right-28 md:right-40 flex flex-col gap-3 p-3 rounded-lg border border-slate-300 bg-white shadow-lg">
          {cartItems.map((item) => {
            return (
              <div className="flex gap-3 font-semibold" key={item.product.id}>
                <img
                  src={item.product.image}
                  className="h-16 w-16 h self-center"
                  alt="img"
                />
                <div className="w-60 flex items-center text-lg sm:text-xl font-bold">
                  {item.product.title}
                </div>

                <div className="flex flex-col gap-1 items-center text-center">
                  Amount: {item.amount}
                  <button
                    onClick={() => {
                      handleDelete(item.product.id);
                    }}
                    className="p-1 bg-black text-white rounded-3xl hover:bg-gray-700"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
