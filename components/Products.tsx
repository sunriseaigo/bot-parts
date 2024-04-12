import React from 'react';
import Image from 'next/image';

interface ProductsProps {
  totalProducts: number;
}

const Products: React.FC<ProductsProps> = ({ totalProducts }) => {
  const productArray = new Array(totalProducts).fill(null);

  return (
    <div className='mt-16 flex gap-6 flex-wrap justify-center'> 
      {productArray.map((_, index) => (
        <div key={index} className="bg-white w-[420px] h-[534px] max-2xl:w-[340px] max-2xl:h-[454px] max-xl:w-[280px] max-xl:h-[394px] max-md:w-[240px] max-md:h-[354px] border-2 p-[20px] text-primary flex flex-col justify-between" style={{ borderRadius: '38px' }}>
          <div>
            <Image
              src="/imgs/product.png"
              alt=""
              width={380}
              height={320}
              // className="max-2xl:w-[100px] max-2xl:h-[108px] max-xl:w-[80px] max-xl:h-[88px] max-md:w-[40px] max-md:h-[48px]"
            />
            <p className="pt-[20px] text-center font-semibold text-[22px] max-2xl:text-[18px] max-md:text-[16px]">Шторка сонцезахисна CarLife на ролеті 90х57 см</p>
          </div>
          <div className="flex justify-between items-center">
            <span>391₴</span>
            <span className="flex items-center gap-3 2xl:text-[40px] text-[30px] bg-secondary px-4" style={{ borderRadius: '37px' }}>+ 
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
      ))}
    </div>
  );
};

export default Products;
