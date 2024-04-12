import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Form from './Form';

const Page5 = () => {
  const customArray = new Array(2).fill(null);
  return (
    <Container>
      <div className='min-h-screen pt-12 text-primary'>

        <section className='flex gap-12 max-xl:flex-col'>
          {/* LEFT */}
          <div className=''>
            <div className='mb-12 flex max-sm:flex-col gap-8'>
              <div className='flex items-center gap-3'>
                <div className='h-[44px] w-[44px] bg-primary text-white text-[32px] max-md:text-[24px] flex items-center justify-center rounded-full'>1</div>
                <span className='text-[22px] max-md:text-[16px]'>Заповніть дані покупця</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='h-[44px] w-[44px] bg-gray-300 text-white text-[32px] max-md:text-[24px] flex items-center justify-center rounded-full'>2</span>
                <span className='text-[22px] max-md:text-[16px] text-gray-300'>Доставка та оплата</span>
              </div>
            </div>

            {customArray.map((_, index) => (
              <div key={index} className='mt-4 p-3 rounded-xl flex max-md:flex-col gap-6 border-2 w-full border-gray-200'>
                <Image
                  src='/imgs/product.png'
                  alt=''
                  width={148}
                  height={118}
                  className='max-md:w-full max-md:h-[248px]'
                />

                <p className='text-[22px]'>Шторка сонцезахисна CarLife на ролеті 90х57 см може бути другий рядок назви товару</p>
                <div className='flex max-md:flex-col gap-4'>
                  <button className='h-[46px] w-[120px] text-[21px] flex items-center justify-center border-2 border-primar rounded-[30px]'>
                    <span>-</span>
                    <span className='mx-4'>1</span>
                    <span>+</span>
                  </button>
                  <div className='flex flex-col max-md:flex-row h-full justify-between items-end max-md:items-center'>
                    <span className='text-[22px]'><RiDeleteBin5Line /></span>
                    <span className='text-[28px] font-semibold'>391₴</span>
                  </div>
                </div>
              </div>
            ))}


            <div className='mt-8 flex font-semibold text-[22px] justify-end gap-12'>
              <span>Всього до сплати:</span>
              <span>1660₴</span>
            </div>
          </div>
          {/* RIGHT */}
          <div>
            <Form />
          </div>
        </section>


        <section className='flex max-md:flex-col mt-20 gap-12'>
          <div>
            <div className='text-[20px] pt-12'>Оплата:</div>
            <p className='text-[16px] pt-2'>Повна передоплата онлайн - передбачає оплату повної суми замовлення через сервіс онлайн-платежів на нашому сайті. Ви можете сплатити 40% вартості як завдаток, а решту суми оплатити при отриманні товару (можлива комісія служби доставки).
              При оплаті за реквізитами ви зможете узгодити з менеджером деталі оплати за телефоном, але сума завдатку в будь-якому разі не може бути меншою за 40% вартості замовлення.
            </p>
          </div>
          <div>
            <div className='text-[20px] pt-8'>Доставка:</div>
            <p className='text-[16px] pt-2'>
              Після передачі замовлення в Україну, доставка здійснюється поштовими службами: Нова пошта, MeestExpress, Delivery та Укрпошта. Ви можете обрати зручну для вас службу доставки та відділення. Будьте уважні: деякі відділення служб доставки мають обмеження по вазі посилки. При виборі відділення, уточніть чи є такі обмеження, в іншому разі - служба доставки має право змінити відділення прибуття на власний розсуд.
            </p>
          </div>
        </section>

        <div className='pt-40' />
      </div>
    </Container>
  );
}

export default Page5;
