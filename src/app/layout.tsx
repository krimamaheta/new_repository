"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navigation";
import Footer from "./componets/footer"
import { Provider } from "react-redux";
import store from "@/Redux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavBar/> */}

    <Provider store={store}>
        {children}
        </ Provider >
        {/* <Footer /> */}
        </body>
    </html>
  );
}
