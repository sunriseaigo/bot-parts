import Image from 'next/image';
import React from 'react';

const Product = () => {
  const productArray = new Array(8).fill(null);

  return (
    <div className='mt-16 flex gap-6 flex-wrap justify-center'> 
      {productArray.map((_, index) => (
        <div key={index} className="w-[420px] h-[534px] border-2 p-[20px] text-primary flex flex-col justify-between" style={{ borderRadius: '38px' }}>
          <div>
            <Image
              src="/imgs/product.png"
              alt=""
              width={380}
              height={320}
              className=""
            />
            <p className="pt-[20px] text-center font-semibold text-[22px]">Шторка сонцезахисна CarLife на ролеті 90х57 см</p>
          </div>
          <div className="flex justify-between">
            <span>391₴</span>
            <span className="flex items-center gap-3">+ 
              <Image
                src="/icons/cart.svg"
                alt=""
                width={48}
                height={36}
                className=""
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
