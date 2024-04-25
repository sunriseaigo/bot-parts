"use client";
import { useSearchContext } from "@/app/Context/SearchContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import axios from "axios";
import { useProductsContext } from "@/app/Context/ProductsContext";

const Dropdown = () => {
  const { query, brand, model, category, subcategory, setQuery } =
    useSearchContext();
  const { setProducts } = useProductsContext();
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (query == "" && (category == "" || subcategory == "")) {
        alert("Need to select category or query");
        return;
      }
      axios
        .post("/api/search", { brand, model, category, subcategory, query })
        .then((res) => {
          console.log(res);
          setProducts(res.data.result);
        })
        .catch((err) => {});
    }
  };
  return (
    <div className="hidden md:flex max-w-[578px] h-full w-full items-center">
      <div className="h-[42px] relative flex w-full flex-wrap items-stretch mx-12">
        <input
          className="
            relative 
            m-0 
            -me-px 
            block 
            flex-auto 
            border border-solid border-neutral-200 
            bg-transparent bg-clip-padding 
            px-3 py-[0.25rem] 
            text-base font-normal leading-[1.6] text-surface 
            outline-none 
            transition duration-200 ease-in-out 
            placeholder:text-neutral-500 
            focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none 
            motion-reduce:transition-none 
            dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          name="search"
          placeholder="Пошук по сайту"
          style={{ borderRadius: "62px" }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => handleSearch(e)}
        />
        <div className="absolute right-0 top-0 mt-3 mr-4 flex">
          <Image src="/icons/search.png" alt="" width={20} height={20} />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="ml-4">
                <Image src="/icons/filter.png" alt="" width={20} height={20} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Bot Parts</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Item-AAAA</DropdownMenuItem>
              <DropdownMenuItem>Item-BBB</DropdownMenuItem>
              <DropdownMenuItem>Item-CCC</DropdownMenuItem>
              <DropdownMenuItem>Item-DDD</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
