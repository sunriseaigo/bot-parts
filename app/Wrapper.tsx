"use client"
import React from 'react'
import Header from "@/components/Navbar/NavAndSidebar";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation'

const Wrapper = ({passingProp}:any) => {
    const pathname = usePathname();
  return (
    <>
        <Header/>
          {passingProp}
          {pathname !== '/contact' &&
          <Footer/>}
    </>
  )
}

export default Wrapper