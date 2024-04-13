import React from 'react';

const tabData = [
  {tab:'Для легкових авто'},
  {tab:'Для вантажних авто'},
  {tab:'Для спецтехніки'},
  {tab:'Для мототранспорту'},
  {tab:'Для позашляховиків'}
]

const Tab = ({tabState, setTabState}:any) => {
  return (
    <div className='rounded-[36px] flex justify-center flex-wrap bg-secondary'>
              {tabData.map((item, index)=>(
                <div 
                  key={index} 
                  onClick={()=>{setTabState(item.tab)}} 
                  className={`${item.tab===tabState && 'rounded-[36px] bg-white'} cursor-pointer py-3 px-5`}
                >
                  {item.tab}
                </div>
              ))}
            </div>
  )
}

export default Tab