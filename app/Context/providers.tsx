"use client";

import React from "react";
import ProductsProvider from "./ProductsContext";
import SearchProvider from "./SearchContext";

interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <ProductsProvider>
      <SearchProvider>{children}</SearchProvider>
    </ProductsProvider>
  );
}
