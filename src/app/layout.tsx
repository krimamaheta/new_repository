"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navigation";
import Footer from "./component/footer"
import { Provider } from "react-redux";
import store from "@/Redux/store";
import { styled, Container, Box } from "@mui/material";
import { DecorationPriceProvider } from "@/context/DecorationPrice";
import Sidebar from "./component/SideBar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  // const [isMobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  return (


    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar/> */}
      
    <Provider store={store}>
    <DecorationPriceProvider>
            {children}
          </DecorationPriceProvider>
        </ Provider >
        {/* <Footer /> */}
        </body>
    </html>
  );
}
