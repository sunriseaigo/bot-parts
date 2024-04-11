import Container from '@/components/Container/Container'
import React from 'react'
import Product from './Product'
import CardWithForm from '@/components/CardWithForm'
import SidebarDropdown from '@/components/SidebarDropdown'

const Page3 = () => {
  return (
    <div>
      {/* SECTION */}

        <Container className='w-full flex max-md:flex-col max-md:items-center gap-8'>
          {/* LEFT */}
          <div className='mt-16 w-full'>
          <CardWithForm/>
          <p className='mt-4 text-primary text-[16px] max-md:text-center'>Відображаються результати за запитом: “Ford - Focus IV Sedan - Система вентиляції - Обігрівачі”</p>
          <div className='mt-16 text-primary text-[36px]'>Підкатегорії</div>
          <div className='mt-2'>
            <SidebarDropdown/>
          </div>
          </div>
          {/* RIGHT */}
          <Product/>
        </Container>
        <div className='mt-40' />
    </div>
  )
}

export default Page3