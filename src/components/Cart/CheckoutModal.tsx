import { useAtom } from "jotai";
import { checkoutStatus, checkoutProductList } from "@/providers/CartContext";
import { Product } from "@/utils/globalTypes";

interface CartItem {
  product: Product;
  amount: number;
}

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
      <div className="flex flex-col justify-between rounded-lg h-[32rem] 2xl:h-[40rem] w-[32rem] 2xl:w-[50rem] bg-white">
        <div className="flex flex-col justify-between">
          <div className="p-3 text-center font-bold text-2xl 2xl:text-4xl">
            Checkout summary
          </div>
          <div className="flex flex-col gap-3 2xl:gap-5 py-2 border-t-2 border-slate-200 h-full max-h-[21rem] 2xl:max-h-[26rem] overflow-y-auto">
            {checkoutItems.map((item: CartItem, index) => (
              <div className="flex justify-between px-2 2xl:px-5 2xl:text-3xl" key={index}>
                <div className="flex gap-1">
                  <img
                    className="h-16 w-16 2xl:h-32 2xl:w-32"
                    src={item.product.thumbnail}
                    alt=""
                  />
                  <div className="font-semibold">{item.product.title}</div>
                </div>
                <div className="flex flex-col justify-around font-semibold text-center">
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
          <div className="border-t-2 border-slate-200 py-2 text-red-500 font-bold text-center text-2xl 2xl:text-4xl">
            TOTAL: ${calcCheckoutTotal()}
          </div>
          <div className="py-2 flex justify-center">
            <button
              onClick={() => setCheckedOut(false)}
              className="p-3 2xl:p-5 rounded-full bg-black hover:bg-slate-800 text-white font-semibold text-xl 2xl:text-3xl"
            >
              Keep shopping!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
