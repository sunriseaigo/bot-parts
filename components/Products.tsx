import React from "react";
import Image from "next/image";
import { useProductsContext } from "@/app/Context/ProductsContext";
import { useRouter } from "next/navigation";

interface ProductsProps {
  totalProducts: number;
}

const Products: React.FC<ProductsProps> = ({ totalProducts }) => {
  const { products, setSelectedProduct } = useProductsContext();

  const router = useRouter();

  const handleClick = (id: number) => {
    setSelectedProduct(id);
    router.push("/page4");
  };

  return (
    <div className="mt-16 flex gap-6 flex-wrap justify-center">
      {products?.map(
        (product: any, index) =>
          index < totalProducts && (
            <div
              key={index}
              className="card-shadow bg-white w-[420px] h-fit max-2xl:w-[340px] max-xl:w-[280px] max-md:w-[240px] max-sm:w-full p-[20px] text-primary flex flex-col justify-between cursor-pointer"
              style={{ borderRadius: "38px" }}
            >
              <div>
                <Image
                  src={product?.mainImage}
                  alt=""
                  width={380}
                  height={320}
                  className="w-full max-h-[320px]"
                  onClick={(e) => handleClick(product?.id)}
                />
                <p className="pt-[20px] text-center font-semibold text-[22px] max-2xl:text-[18px] max-md:text-[16px]">
                  {product.title}
                </p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span>{product.price}₴</span>
                <span
                  className="flex items-center gap-3 2xl:text-[40px] text-[30px] bg-secondary px-4"
                  style={{ borderRadius: "37px" }}
                >
                  +
                  <Image
                    src="/icons/cart.svg"
                    alt=""
                    width={48}
                    height={36}
                    className="2xl:w-[48px] 2xl:h-[36px] w-[36px] h-[24px]"
                  />
                </span>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Products;
