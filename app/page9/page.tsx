import React, { Fragment } from 'react'
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Container from '@/components/Container/Container';
import CustomTabs from '@/components/CustomTabs';


const Page8 = () => {
    const productArray = new Array(12).fill(null);
  return (
    <div className='text-primary'>
        {/* Top Part */}
        <CustomTabs active="Блог" />

        <Container>
            <div className="mt-12 flex gap-12 max-sm:gap-2  max-sm:flex-col ">
              <Select>
                <SelectTrigger id="framework" className="max-w-[264px]" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Усі статті" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Усі статті">Усі статті</SelectItem>
                  <SelectItem value="Усі статті 22">Усі статті 22</SelectItem>
                  <SelectItem value="Усі статті 33">Усі статті 33</SelectItem>
                  <SelectItem value="Усі статті 44">Усі статті 44</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id="framework" className="max-w-[264px]" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Сортувати за: найновіші" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Сортувати за: найновіші">Сортувати за: найновіші</SelectItem>
                  <SelectItem value="Сортувати за: найновіші 22">Сортувати за: найновіші 22</SelectItem>
                  <SelectItem value="Сортувати за: найновіші 33">Сортувати за: найновіші 33</SelectItem>
                  <SelectItem value="Сортувати за: найновіші 44">Сортувати за: найновіші 44</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='flex justify-center gap-6 flex-wrap mt-12'>
                {productArray.map((_, index)=>(
                <div key={index} className='w-[420px] max-2xl:w-[380px] max-xl:w-[340px] max-lg:w-[300px] max-md:w-[240px] max-sm:w-full rounded-[20px] p-4 card-shadow'>
                    <Image
                        src="/imgs/cars/car1.png"
                        alt=""
                        width={1206}
                        height={400}
                        className='w-full h-auto'
                    />
                    <p className='pt-2 text-[22px] max-lg:text-[18px] max-md:text-[16px] font-bold'>На «права» дозволять вчитися самостійно. Але отримати їх стало складніше</p>
                    <div className='pt-4 text-[18px] max-lg:text-[16px] max-md:text-[14px] flex max-md:flex-col justify-between'>
                        <span>23.05.2023</span>
                        <span>Читати повністю</span>
                    </div>
                </div>))}
            </div>

            <div className='mt-40'/>
        </Container>
    </div>
  )
}

export default Page8