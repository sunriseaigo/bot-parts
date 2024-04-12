import React from 'react'
import Container from '@/components/Container/Container'
import Sidebar from '../../components/SidebarDropdown'
import Tab from './Tab'
import Products from '@/components/Products'

const Page1 = () => {
  return (
    <div>
      {/* SECTION */}
      <div className='bg-primary'>
        <Container>
          <div className='flex gap-2 max-xl:flex-col h-[132px] justify-between max-xl:justify-center items-center'>
            <div className='text-white text-semibold text-[36px]'>Шини і диски</div> 
            <Tab/>
          </div>
        </Container>
        </div>

        <Container className='w-full flex max-md:flex-col max-md:items-center gap-8'>
          {/* LEFT */}
          <div className='w-full mt-16'>
            <Sidebar/>
          </div>
          {/* RIGHT */}
          <Products totalProducts={12}/>
        </Container>
        <div className='mt-40' />
    </div>
  )
}

export default Page1