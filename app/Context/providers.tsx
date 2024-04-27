"use client";

import React from "react";
import ProductsProvider from "./ProductsContext";
import SearchProvider from "./SearchContext";
import CategoryProvider from "./CategoryContext";
interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps) {
  return (
    <ProductsProvider>
      <SearchProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </SearchProvider>
    </ProductsProvider>
  );
}
