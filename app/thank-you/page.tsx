import Container from '@/components/Container/Container';
import React from 'react';

const ThankYou = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/imgs/bg1.svg')`, backgroundPosition: 'left' }}
      />
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/imgs/bg2.svg')`, backgroundPosition: 'right' }}
      />
      <div className='text-primary flex flex-col items-center justify-center h-screen'>
        <Container className='font-bold text-[36px]'>Дякуємо за покупку!</Container>
        <div className='font-semibold bg-secondary w-screen flex justify-center text-[22px] p-3 mt-4'>
            Ваше замовлення №000 0000 000 000
        </div>
        <Container>
            <p className='font-semibold max-w-[1000px] text-center text-[20px] mt-8'>За цим номером ви зможете відстежити свою покупку.
            Найближчим часом з вами зв’яжеться наш менеджер та повідомить деталі вашого замовлення.
            </p>
        </Container>
        <Container>
        <button className='font-semibold rounded-[36px] px-12 py-4 border-2 border-primary mt-8'>Повернутися на головну</button>
        </Container>
      </div>
    </section>
  );
};

export default ThankYou;
