"use client";
import { useState, useContext } from "react";
import ProductRating from "@/components/ProductRating";
import { CartContext } from "@/providers/CartContext";
import AmountCounter from "@/components/AmountCounter";

interface Item {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductPageProps {
  params: {
    category: string;
    product: Array<string>;
  };
  product: Item;
}

export default function ProductPage({ params, product }: ProductPageProps) {
  const { addToCart } = useContext(CartContext);

  const [amount, setAmount] = useState<number>(0);

  const handleAddToCart = () => {
    if (amount > 0) {
      const cartItem = {
        product,
        amount,
      };
      addToCart(cartItem);
    }
  };


  // console.log(params);
  // console.log(product);
  return (
    <div className="flex flex-col border border-black bg-white rounded-xl text-2xl font-semibold">
      <div className="p-8 text-3xl md:text-6xl">{product.title}</div>
      <div className="flex flex-col lg:flex-row">
        <img
          className="h-80 sm:h-96 md:h-[28rem] lg:w-1/2 m-10 lg:m-5 sm:p-10"
          src={product.image}
          alt="image"
        />
        <div className="flex flex-col gap-5 lg:w-1/2 mx-10 md:my-7 p-5 border-2 border-black rounded-xl">
          <div className="md:flex items-center gap-2">
            <div className="font-extrabold">Category:</div> {product.category}
          </div>
          <div className="md:flex items-center gap-2">
            <div className="font-extrabold">Rating:</div>
            <ProductRating rating={product.rating.rate} />{" "}
            <div className="flex items-center border-b-2 border-black border-dotted text-lg">
              {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
          <div className="flex gap-3">
            <div className="font-extrabold">Price:</div>{" "}
            <div className="font-bold text-red-500">${product.price}</div>
          </div>
          <AmountCounter amount={amount} setAmount={setAmount} />
          <button
            onClick={handleAddToCart}
            className="md:mt-10 w-3/4 p-3 rounded-full bg-black text-white self-center hover:bg-gray-700"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="self-center mt-5 md:m-0 h-[2px] w-11/12 bg-black"></div>
      <div className="flex flex-col gap-3 px-10 my-5 md:mb-5 md:mt-2">
        <div className="text-3xl font-extrabold">Details:</div>
        <div className="font-normal">{product.description}</div>
      </div>
    </div>
  );
}
