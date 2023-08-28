// "use client";
// import { createContext, useState } from "react";

interface CartItem {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
  };
  amount: number;
}

// interface CartContextValue {
//   cartItems: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (itemIndex: number) => void;
// }

// export const CartContext = createContext<CartContextValue>({
//   cartItems: [],
//   addToCart: () => {},
//   removeFromCart: () => {},
// });

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (itemIndex: number) => {
//     const updatedCartItems = cartItems.filter(
//       (item, index) => index !== itemIndex
//     );
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import {atom} from "jotai";
//const [cartItems, setCartItems] = useState<CartItem[]>([]);

export const cart = atom([]);


// const removeFromCart = (itemIndex: number) => {
//   const updatedCartItems = cartItems.filter(
//     (item, index) => index !== itemIndex
//   );
//   setCartItems(updatedCartItems);
// };
