import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const topberItems = [
    { 
        name: 'Як замовити',
        link: '/page8'
    },
    { 
        name: 'Оплата та доставка',
        link: '/page6'
    },
    { 
        name: 'Гарантія та повернення' ,
        link: '/page7'
    },
    { 
        name: 'Блог',
        link: '/page9'
    },
];

const CustomTabs = ({active}:any) => {
  return (
    <>
      <Image
        src="/imgs/banner.svg"
        alt=""
        width={1}
        height={1}
        className='w-full h-auto'
      />
      <div style={{ marginTop: '-2px' }} className='gap-4 px-16 flex bg-primary text-white justify-center xl:text-[22px] lg:text-[16px] md:text-[14px] text-[12px] flex-wrap'>
        {topberItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <div 
                className={`${active===item.name && 'bg-secondary'} px-8  cursor-pointer rounded-[36px] text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] flex h-[54px] items-center`}
            >
                {item.name}
            </div>
            </Link>
        ))}
      </div>

    </>
  )
}

export default CustomTabs