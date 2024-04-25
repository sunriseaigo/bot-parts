"use client";
import React from "react";
import Header from "@/components/Navbar/NavAndSidebar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { Providers } from "./Context/providers";

const Wrapper = ({ passingProp }: any) => {
  const pathname = usePathname();
  return (
    <>
      {" "}
      <Providers>
        <Header />+ {passingProp}
        {pathname !== "/contact" && <Footer />}
      </Providers>
    </>
  );
};

export default Wrapper;
