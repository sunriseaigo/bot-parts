import Container from '@/components/Container/Container'
import React from 'react'
import Product from './Product'
import Sidebar from './Sidebar'
import CardWithForm from './CardWithForm'

const Page2 = () => {
  return (
    <div>
      {/* SECTION */}
      <div className='bg-primary'>
        <Container>
          <div className='flex h-[132px] justify-between items-center'>
            <div className='text-white text-semibold text-[36px] max-w-[420px]'>Автозапчастини для легкових авто</div> 
            <div>Шини і диски</div>
          </div>
        </Container>
        </div>

        <Container className='flex max-md:flex-col max-md:items-center gap-8'>
          {/* LEFT */}
          <div className='mt-16'>
          <CardWithForm/>
          <p className='mt-4 text-primary text-[16px]'>Відображаються результати за запитом: “Ford - Focus IV Sedan - Система вентиляції - Обігрівачі”</p>
          <div className='mt-16 text-primary text-[36px]'>Підкатегорії</div>
          <Sidebar/>
          </div>
          {/* RIGHT */}
          <Product/>
        </Container>
    </div>
  )
}

export default Page2