"use client";
import { useState, createContext } from "react";

//Set interfaces
interface AmountContextProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface AmountTrackerProps {
  children: React.ReactNode;
}

//Create context object
export const AmountContext = createContext<AmountContextProps>({
  amount: 0,
  setAmount: () => {},
});

//Create provider
export const AmountTracker: React.FC<AmountTrackerProps> = ({ children }) => {
  //Set ininital amount state
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
