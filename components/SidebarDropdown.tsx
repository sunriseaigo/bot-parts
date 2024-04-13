'use client'
import React, { useState } from 'react'
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
    const [openStates, setOpenStates] = useState(new Array(dropdownList.length).fill(false));
  
    const handleDropdownClick = (index:any) => {
        const newOpenStates = [...openStates];
        newOpenStates[index] = !newOpenStates[index];
        setOpenStates(newOpenStates);
    };

    return (
        <div className=''>
            {dropdownList.map((item, index)=>(
                <div className='cursor-pointer w-[424px] max-2xl:w-[340px] max-xl:w-[300px] max-md:w-full border-b-2 border-primary text-[20px] text-primary' key={index}>
                    <div onClick={()=>{handleDropdownClick(index)}} className='flex pt-6 max-md:pt-3 pb-2 items-center'> 
                        <span className='mr-2'><FaChevronRight /></span>{item.name}
                    </div>
                    {openStates[index] &&
                    <div className='text-[18px] pl-12 pb-4'>
                        <div className='py-1'>Option AAA</div>
                        <div className='py-1'>Option BBB</div>
                        <div className='py-1'>Option CCC</div>
                        <div className='py-1'>Option DDD</div>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default SidebarDropdown
