import Image from 'next/image';
import React, { Fragment } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import CardWithForm from './CardWithForm';
import Container from '@/components/Container/Container';
import Product from './Product';

const topberItems = [
  { name: 'Легкові авто' },
  { name: 'Вантажівки' },
  { name: 'Спец техніка' },
  { name: 'Шини/диски' },
  { name: 'Аксесуари' },
];

const Home = () => {
  return (
    <div>
      <Image
        src="/imgs/banner.svg"
        alt=""
        width={1206}
        height={400}
        className='w-full h-auto'
      />
      <div style={{ marginTop: '-2px' }} className='px-16 flex bg-primary text-white justify-center xl:text-[22px] lg:text-[16px] md:text-[14px] text-[12px] flex-wrap'>
        {topberItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && 
              <div className='h-[54px] flex items-center'>
                <Image
                  src="/icons/yellowCircle.svg"
                  alt=""
                  width={1206}
                  height={400}
                  className='w-full h-auto lg:mx-12 md:mx-6 mx-3'
                />
              </div>
            }
            <div className='h-[54px] flex items-center'>{item.name}</div>
          </Fragment>
        ))}
      </div>
       

      <Container>
      {/* SECTION */}
      <div className='flex mt-12 gap-12'>
        {/* LEFT */}
        <CardWithForm/>
        {/* RIGHT */}
        <div className='hidden md:inline'>
          <div className='font-medium text-[48px] text-primary'>Доставимо запчастини з Європи</div>
          <div className='max-w-[390px] text-primary flex flex-col items-center border- border-blac'>
          <Image
                  src="/imgs/manLogo.svg"
                  alt=""
                  width={165}
                  height={173}
                  className=''
                />
                <div className='flex justify-center text-[32px] my-3'>Шукай</div>
                <div className='flex text-center text-[18px]'>Dignissim maecenas pulvinar eros mi gravida eu nisi fermentum mi. Semper sed adipiscing faucibus vulputate vel.</div>
          </div>
        </div>
      <div>
    </div>
    </div>


    {/* SECTION */}
    <div className='mt-24 '>
          <div className='font-semibold text-primary text-[36px] text-center'>Акційні товари та сезонні пропозиції</div>
        <Product/>
        </div>
    </Container>
    </div>
  );
};

export default Home;
