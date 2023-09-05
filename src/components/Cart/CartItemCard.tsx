import { Product } from "@/utils/globalTypes";

interface CartItem {
  product: Product;
  amount: number;
}

interface CartItemCardProps {
  item: CartItem;
  index: number;
  cartItems: CartItem[];
  removeItemFromCart: (index: number) => void;
}

export default function CartItemCard({
  item,
  index,
  cartItems,
  removeItemFromCart,
}: CartItemCardProps) {
    
  return (
    <div>
      <div className="flex gap-3 justify-between font-semibold">
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
}
