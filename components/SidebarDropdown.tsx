"use client";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { useSearchContext } from "@/app/Context/SearchContext";
import { useProductsContext } from "@/app/Context/ProductsContext";

interface ICategory {
  title: string;
  allegro_id: number;
}

const SidebarDropdown = () => {
  // const { categories, subcategories } = useCategoryContext();
  const [categories, setCategories] = useState<Array<ICategory>>([]);

  const [subcategories, setSubCategories] = useState<Array<ICategory>>([]);
  const [openStates, setOpenStates] = useState(
    new Array(categories.length).fill(false)
  );
  const { query, brand, category, model } = useSearchContext();
  const handleDropdownClick = (index: any, pk: any) => {
    getCarSubCategories(pk);
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  const { setProducts } = useProductsContext();

  const handleSearch = (id: number) => {
    axios
      .post("/api/search", { subcategory: id, query, brand, model, category })
      .then((res) => {
        console.log(res);
        setProducts(res.data.result);
      })
      .catch((err) => {});
  };

  const getCarCategories = async (pk: string) => {
    axios
      .post("/api/category", { pk: pk })
      .then((res) => {
        setCategories(res.data.categories.categories);
        // console.log(res.data.categories.categories);
      })
      .catch((err) => {});
  };
  const getCarSubCategories = async (pk: string) => {
    axios
      .post("/api/subcategory", { pk: pk })
      .then((res) => {
        setSubCategories(res.data.subcategories.categories);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getCarCategories("620");
  }, []);

  return (
    <div className="">
      {categories.map((item: any, index: number) => (
        <div
          className="cursor-pointer w-[424px] max-2xl:w-[340px] max-xl:w-[300px] max-md:w-full border-b-2 border-primary text-[20px] text-primary"
          key={index}
        >
          <div
            onClick={() => {
              handleDropdownClick(index, item.pk);
            }}
            className="flex pt-6 max-md:pt-3 pb-2 items-center"
          >
            <span className="mr-2">
              <FaChevronRight />
            </span>
            {item?.title}
          </div>
          {openStates[index] && (
            <div className="text-[18px] pl-12 pb-4">
              {subcategories.map((subcategory: any, index) => {
                return (
                  <div
                    className="py-1"
                    onClick={(e) => handleSearch(subcategory.allegro_id)}
                    key={index}
                  >
                    {subcategory.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarDropdown;
