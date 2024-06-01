"use client";
import store from "@/Redux/store";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Provider } from "react-redux";

interface DecorationPriceContextType {
  decorationPrice: string;
  eventID: string;
  isApproved: boolean;
  setPrices: (price: string) => void;
  updateEventID: (eventID: string) => void;
  handlesetIsApproved: (isApproved: boolean) => void;
}

const DecorationPriceContext = createContext<DecorationPriceContextType | null>(null);

export const useDecorationPrice = () => {
  const context = useContext(DecorationPriceContext);
  if (!context) {
    throw new Error("useDecorationPrice must be used within a DecorationPriceProvider");
  }
  return context;
};

interface DecorationPriceProviderProps {
  children: ReactNode;
}

export const DecorationPriceProvider: React.FC<DecorationPriceProviderProps> = ({ children }) => {
  const [decorationPrice, setDecorationPrice] = useState<string>("");
  const [eventID, setEventID] = useState<string>("");
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const setPrices = (price: string) => {
    console.log("setprice price", price);
    setDecorationPrice(price);
  };

  const handlesetIsApproved = (isApproved: boolean) => {
    setIsApproved(isApproved);
  };

  const updateEventID = (id: string) => {
    setEventID(id);
  };

  return (
    <DecorationPriceContext.Provider
      value={{
        decorationPrice,
        setPrices,
        isApproved,
        handlesetIsApproved,
        eventID,
        updateEventID,
      }}
    >
      <Provider store={store}>
        {children}
      </Provider>
    </DecorationPriceContext.Provider>
  );
};
