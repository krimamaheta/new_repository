

import React, { createContext, useContext, useState } from "react";

interface DecorationPriceContextType {
  decorationPrice: string;
  eventID:string;
  setPrices: (price: string) => void;
  setEventID:(eventID:string)=>void;
  isApproved: boolean;
  setApprovalStatus: (status: boolean) => void;
}

const DecorationPriceContext = createContext<DecorationPriceContextType | null>(
  null
);

export const useDecorationPrice = () => {
  const context = useContext(DecorationPriceContext);
  if (!context) {
    throw new Error(
      "useDecorationPrice must be used within a DecorationPriceProvider"
    );
  }
  return context;
};

export const DecorationPriceProvider: React.FC = ({ children }) => {
  const [decorationPrice, setDecorationPrice] = useState("");
  const [eventID,setEventID]=useState("");
  const [isApproved, setIsApproved] = useState(false);

  const setPrices = (price: string) => {
    setDecorationPrice(price);
  };

  const setApprovalStatus=(status:boolean)=>{
    setIsApproved(status);
  }

  return (
    <DecorationPriceContext.Provider value={{ decorationPrice, setPrices ,eventID,setEventID,isApproved,setApprovalStatus}}>
      {children}
    </DecorationPriceContext.Provider>
  );
};