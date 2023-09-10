"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { checkoutStatus, checkoutProductList } from "@/providers/CartContext";
import { AnimatePresence, motion as m } from "framer-motion";
import { cart } from "@/providers/CartContext";
import { Product } from "@/utils/globalTypes";
import EmptyCartBtn from "./EmptyCartBtn";
import CartItemCard from "./CartItemCard";

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
  const [checkedOut, setCheckedOut] = useAtom(checkoutStatus);
  const [checkouttList, setCheckoutList] = useAtom(checkoutProductList);
  const [cartTotal, setCartTotal] = useState(0);

  //item removal logic
  const removeItemFromCart = (itemIndex: number) => {
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== itemIndex
    );
    setCartItems(updatedCartItems);
  };

  //empty cart logic
  const emptyCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    //console.log(cartItems);
    setCheckoutList(cartItems);
    emptyCart();
    setCheckedOut(true);
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
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {cartItems.length > 0 && showCart && (
        <div className="absolute z-10 top-16 left-10 sm:left-auto sm:right-12 md:right-40 flex flex-col gap-3 p-3 rounded-lg border border-slate-300 bg-white shadow-lg">
          <div className="flex justify-between py-2 border-b-2 border-slate-200">
            <div className="w-full pl-8 text-center text-2xl font-bold">
              Your shopping cart
            </div>
            <div className="flex justify-end">
              <EmptyCartBtn method={emptyCart} />
            </div>
          </div>
          <div className={`flex flex-col gap-3 max-h-60 overflow-y-auto`}>
            <AnimatePresence>
              {cartItems.map((item: CartItem, index) => {
                return (
                  <CartItemCard
                    key={index}
                    item={item}
                    cartItems={cartItems}
                    removeItemFromCart={removeItemFromCart}
                    index={index}
                  />
                );
              })}
            </AnimatePresence>
          </div>
          <div className="border-2 border-slate-200 rounded-lg text-center text-2xl font-bold text-red-500">
            TOTAL: ${cartTotal}
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleCheckout}
              className="py-2 px-10 rounded-full bg-red-600 hover:bg-green-600 text-white text-2xl font-bold"
            >
              Place order!
            </button>
          </div>
        </div>
      )}
    </m.div>
  );
}
