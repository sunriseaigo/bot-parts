"use client";

import React from "react";
import ProductsProvider from "./ProductsContext";

interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
