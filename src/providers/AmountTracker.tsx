"use client"
import { useState, createContext } from "react";

interface AmountContextProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface AmountTrackerProps {
  children: React.ReactNode;
}

export const AmountContext = createContext<AmountContextProps>({
  amount: 0,
  setAmount: () => {},
});


export const AmountTracker: React.FC<AmountTrackerProps> = ({ children }) => {
  const [amount, setAmount] = useState<number>(0);

  const contextValue: AmountContextProps = {
    amount,
    setAmount,
  };

  return (
    <AmountContext.Provider value={contextValue}>
      {children}
    </AmountContext.Provider>
  );
};
