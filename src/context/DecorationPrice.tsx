

import React, { createContext, useContext, useState } from "react";

interface DecorationPriceContextType {
  decorationPrice: string;
  eventID:string;
  isApproved: boolean;
  setPrices: (price: string) => void;
  setEventID:(eventID:string)=>void;
  handlesetIsApproved: (isApproved: boolean) => void;
 

  
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
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const setPrices = (price: string) => {
    console.log("setprice price",price)
    setDecorationPrice(price);
  };
  const handlesetIsApproved = (isApproved: boolean) => {
    setIsApproved(isApproved);
  };



  return (
    <DecorationPriceContext.Provider value={{ decorationPrice, setPrices ,eventID,setEventID,isApproved,handlesetIsApproved}}>
      {children}
    </DecorationPriceContext.Provider>
  );
};