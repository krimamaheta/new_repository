// import React,{createContext,useContext,useState} from "react";

// interface DecorationPriceContextType{
//     decorationPrice:string;
//     setPrices:(price:string)=>void
// }
// const DecorationPriceContext = createContext<DecorationPriceContextType |null>(null);

// // eslint-disable-next-line react-hooks/rules-of-hooks
// export const useDecorationPrice=()=>{
//     const context=useContext(DecorationPriceContext);
//     if (!context) {
//         throw new Error(
//           "useDecorationPrice must be used within a DecorationPriceProvider"
//         );
//       }
//       return context;
// }
// interface DecorationPriceProviderProps {
//   value: {
//     decorationPrice: string;
//     setPrices: (price: string) => void;
//   };
//   children: React.ReactNode;
// }
// export const DecorationPriceProvider:React.FC<DecorationPriceProviderProps>=({children})=>{
//     const[decorationPrice,setdecorationPrce]=useState("");
//     const setPrices=(price:string)=>{
//         setdecorationPrce(price)
//     }
//     return(
//         <div>
//             <DecorationPriceProvider value={{decorationPrice,setPrices}}>
//                 {children}
//             </DecorationPriceProvider>
//         </div>
//     )
// }

import React, { createContext, useContext, useState } from "react";

interface DecorationPriceContextType {
  decorationPrice: string;
  eventID:string;
  setPrices: (price: string) => void;
  setEventID:(eventID:string)=>void;
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

  const setPrices = (price: string) => {
    setDecorationPrice(price);
  };

  return (
    <DecorationPriceContext.Provider value={{ decorationPrice, setPrices ,eventID,setEventID}}>
      {children}
    </DecorationPriceContext.Provider>
  );
};