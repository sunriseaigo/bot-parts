"use client";

import React, { useState, createContext, useContext } from "react";

interface IProductsProps {
  children: React.ReactNode;
}
export interface IProduct {
  id: number;
  url: string;
  title: string;
  price: number;
  price_with_delivery: number;
  quantity: number;
  buyers: number;
  mainThumbnail: string;
  mainImage: string;
}
const ProductsContext = createContext({
  products: [],
  setProducts: (products: any) => {},
});

const ProductsProvider = ({ children }: IProductsProps) => {
  const [products, setProduct] = useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts: setProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => useContext(ProductsContext);
export default ProductsProvider;
