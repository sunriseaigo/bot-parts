import React from 'react'


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


const Sidebar = () => {
  return (
    <div className='mt-4'>
        {dropdownList.map((item, index)=>(
            <div className='w-[424px] border-b-2 border-primary text-[20px] text-primary flex-nowrap' key={index}>
                <div className='py-6 px-4'>{item.name}</div>
            </div>
        ))}
    </div>
  )
}

export default Sidebar