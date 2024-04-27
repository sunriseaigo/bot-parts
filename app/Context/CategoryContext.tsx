"use client";

import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

interface ICategoryProps {
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
const CategoryContext = createContext({
  categories: [],
  setCategories: (categories: any) => {},
  subcategories: [],
  setSubcategories: (subcategories: any) => {},
});

const CategoryProvider = ({ children }: ICategoryProps) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const getSubCategories = async (categories: any) => {
    let pks: any[] = [];
    categories.map((category: any) => {
      pks.push(category.pk);
    });

    axios
      .post("/api/subcategory", { pk: 620, pks: pks })
      .then((res) => {
        console.log(res.data);
        setSubcategories(res.data.subcategories.subcategories);
      })
      .catch((err) => {});
  };

  const getCategories = async () => {
    axios
      .post("/api/category", { pk: 620 })
      .then((res) => {
        setCategories(res.data.categories.categories);
        getSubCategories(res.data.categories.categories);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, subcategories, setSubcategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategoryContext = () => useContext(CategoryContext);
export default CategoryProvider;
