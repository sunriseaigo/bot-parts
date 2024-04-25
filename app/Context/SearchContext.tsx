"use client";

import React, { useState, createContext, useContext } from "react";

const SearchContext = createContext({
  brand: "",
  setBrand: (brand: string) => {},
  model: "",
  setModel: (model: string) => {},
  category: "",
  setCategory: (category: string) => {},
  subcategory: "",
  setSubcategory: (subcategory: string) => {},
  query: "",
  setQuery: (query: string) => {},
});
interface ISearchContextProps {
  children: React.ReactNode;
}
const SearchProvider = ({ children }: ISearchContextProps) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{
        brand,
        setBrand,
        model,
        setModel,
        category,
        setCategory,
        subcategory,
        setSubcategory,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => useContext(SearchContext);
export default SearchProvider;
