'use client';
import React, { useState } from 'react'
import Container from '@/components/Container/Container'
import Sidebar from '../../components/SidebarDropdown'
import Products from '@/components/Products'
import Tab from './Tab';

const Page1 = () => {
  const [tabState, setTabState] = useState('Для легкових авто');
  return (
    <div>
      {/* SECTION */}
      <div className='bg-primary'>
        <Container>
          <div className='py-12 flex gap-6 max-xl:flex-col min-h-[132px] justify-between max-xl:justify-center items-center'>
            <div className='text-white text-semibold text-[36px]'>Шини і диски</div> 
            <Tab tabState={tabState} setTabState={setTabState}/>
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