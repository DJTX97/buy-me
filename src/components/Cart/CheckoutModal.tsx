import { SetStateAction, useState } from "react";
import { atom, useAtom } from "jotai";
import { checkoutStatus, checkoutProductList } from "@/providers/CartContext";
import { Product } from "@/utils/globalTypes";

interface CartItem {
  product: Product;
  amount: number;
}

interface CheckOutModalProps {}

export default function CheckoutModal() {
  const [checkedOut, setCheckedOut] = useAtom(checkoutStatus);
  const [checkoutItems] = useAtom(checkoutProductList);

  const calcCheckoutTotal = () => {
    return checkoutItems.reduce(
      (acc, item: CartItem) => acc + item.product.price * item.amount,
      0
    );
  };

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 z-10 h-screen w-full bg-black bg-opacity-75 overflow-hidden">
      <div className="flex flex-col justify-between rounded-lg h-[32rem] w-[32rem] bg-white">
        <div className="flex flex-col justify-between">
          <div className="p-3 text-center font-bold text-2xl">Checkout summary</div>
          <div className="flex flex-col gap-3 py-2 border-t-2 border-slate-200 h-full max-h-[21rem] overflow-y-auto">
            {checkoutItems.map((item: CartItem, index) => (
              <div className="flex justify-between px-2" key={index}>
                <div className="flex gap-1">
                  <img
                    className="h-16 w-16"
                    src={item.product.thumbnail}
                    alt=""
                  />
                  <div className="font-semibold">{item.product.title}</div>
                </div>
                <div className="flex flex-col font-semibold text-center">
                  <div className="">x{item.amount}</div>
                  <div className="text-red-500">
                    ${item.product.price * item.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="border-t-2 border-slate-200 py-2 text-red-500 font-bold text-center text-2xl">
            TOTAL: ${calcCheckoutTotal()}
          </div>
          <div className="py-2 flex justify-center">
            <button
              onClick={() => setCheckedOut(false)}
              className="p-3 rounded-full bg-black hover:bg-slate-800 text-white font-semibold text-xl"
            >
              Keep shopping!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
