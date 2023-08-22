"use client";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartDisplay() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div className="absolute z-10 top-14 sm:right-28 md:right-40 flex flex-col gap-3 p-3 rounded-lg border border-slate-300 bg-white shadow-lg">
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div className="flex gap-3 font-semibold" key={item.product.id}>
              
                <img
                  src={item.product.image}
                  className="h-16 w-16 h self-center"
                  alt="img"
                />
                <div className="w-60 flex items-center text-xl font-bold">{item.product.title}</div>
            

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
        })
      ) : (
        <div className="text-center text-xl font-bold">Cart is empty!</div>
      )}
    </div>
  );
}
