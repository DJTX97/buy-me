"use client";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartDisplay() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (id: string) => {
    removeFromCart(id);
  };
  
  return (
    <div className="absolute top-14 sm:right-28 md:right-40 p-5 rounded-lg border border-slate-300 bg-white">
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          return (
            <div className="flex gap-3" key={item.product.id}>
              <img src={item.product.image} className="h-14" alt="" />
              <div>{item.product.title}</div>
              <div>Amount: {item.amount}</div>
              <button onClick={() => {handleDelete(item.product.id)}}>DELETE</button>
            </div>
          );
        })
      ) : (
        <div>Missing</div>
      )}
    </div>
  );
}
