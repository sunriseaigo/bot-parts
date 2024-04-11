import Container from '@/components/Container/Container'
import React from 'react'
import Product from './Product'
import CardWithForm from '@/components/CardWithForm'
import SidebarDropdown from '@/components/SidebarDropdown'

const topbarList = [
  {name: 'Як замовити'},
  {name: 'Оплата та доставка'},
  {name: 'Гарантія та повернення'},
  {name: 'Блог'},
]

const Page2 = () => {
  return (
    <div>
      {/* SECTION */}
      <div className='bg-primary'>
        <Container>
          <div className='flex max-xl:flex-col h-[132px] justify-between max-xl:justify-center gap-2 items-center'>
            <div className='text-white text-semibold text-[36px] max-md:text-[24px] max-w-[420px] max-xl:max-w-full'>Автозапчастини для легкових авто</div> 
            <div className='text-white text-[20px] flex gap-12 max-xl:gap-6 max-2xl:text-[16px]'>
              {topbarList.map((item, index)=>(
                <span className='max-md:text-[12px]' key={index}>{item.name}</span>
              ))}
            </div>
          </div>
        </Container>
        </div>

        <Container className='w-full flex max-md:flex-col max-md:items-center gap-8'>
          {/* LEFT */}
          <div className='mt-16 w-full'>
          <CardWithForm/>
          <div className='mt-16 w-full'>
            <SidebarDropdown/>
          </div>
          </div>
          {/* RIGHT */}
          <Product/>
        </Container>
    </div>
  )
}

export default Page2