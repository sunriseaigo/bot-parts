import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const dropdownList = [
    {
        name: 'Механічний тюнінг',
    },
    {
        name: 'Паливна система',
    },
    {
        name: 'Система приводу',
    },
    {
        name: 'Кондиціонування повітря',
    },
    {
        name: 'Системи охолодження двигуна',
    },
    {
        name: 'Внутрішнє оздоблення',
    },
    {
        name: 'Система вентиляції',
    },
    {
        name: 'Паливна система',
    },
    {
        name: 'Кондиціонування повітря',
    },
]


const SidebarDropdown = () => {
  return (
    <div className=''>
        {dropdownList.map((item, index)=>(
            <div className='w-[424px] max-2xl:w-[340px] max-xl:w-[300px] max-md:w-full border-b-2 border-primary text-[20px] text-primary' key={index}>
                <div className='flex py-6 max-md:py-3 items-center'> 
                    <span className='mr-2'><FaChevronRight /></span>{item.name}
                </div>
            </div>
        ))}
    </div>
  )
}

export default SidebarDropdown