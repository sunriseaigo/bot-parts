import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const ThankYou = () => {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/imgs/bg1.svg')`, backgroundPosition: 'left' }}
      />
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/imgs/bg2.svg')`, backgroundPosition: 'right' }}
      />
      <div className=' text-primary flex flex-col items-center justify-center min-h-screen'>
        <Image
          src="/imgs/notFound.svg"
          alt=""
          width={170}
          height={175}
        />
        <Container className='mt-12 text-center font-bold text-[36px]'>Cхоже, такої сторінки не існує</Container>
        <Container>
            <p className='font-semibold max-w-[1000px] text-center text-[20px] mt-8'>
            Ми вже шукаємо, куди вона поділася.
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
