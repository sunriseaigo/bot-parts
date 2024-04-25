"use client";
import React from "react";
import Header from "@/components/Navbar/NavAndSidebar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import ProductsProvider from "./Context/ProductsContext";

const Wrapper = ({ passingProp }: any) => {
  const pathname = usePathname();
  return (
    <>
      <Header />
      <ProductsProvider>
        {" "}
        {passingProp}
        {pathname !== "/contact" && <Footer />}
      </ProductsProvider>
    </>
  );
};

export default Wrapper;
