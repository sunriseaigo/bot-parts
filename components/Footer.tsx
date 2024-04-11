import Image from "next/image"
import Container from "./Container/Container"
import { Fragment } from "react";

const topberItems = [
  { name: 'Легкові авто' },
  { name: 'Вантажівки' },
  { name: 'Спец техніка' },
  { name: 'Шини/диски' },
  { name: 'Аксесуари' },
];

const bottomList = [
  {name:"Відстежити"},
  {name:"Як замовити"},
  {name:"Оплата та доставка"},
  {name:"Гарантія та повернення"},
  {name:"Про нас"},
  {name:"Блог"},
  {name:"Контакти"},
]

const Footer = () => {
  return (
    <footer className="mt-40 text-primary">
        {/* <Container> */}

        {/* SECTION-01 */}
         <div className="py-8 bg-secondary font-bold text-[32px] text-center">
            <Container>Залишилися питання? Задайте їх нам!</Container>    
          </div>

         {/* SECTION-02 */}
          <div className="py-12 bg-primary text-white">
            <Container className="flex max-md:items-center max-md:flex-col gap-20">
            <Image
                src="/icons/bottomLogo.svg"
                alt=""
                width={226}
                height={235}
                className='max-md:w-[126px] max-md:h-[135px]'
              />
            <div>
              <div className="text-[52px] max-md:text-center max-md:text-[40px] max-sm:text-[30px] text-secondary font-semibold">VIN-VIN рішення для швидких дій</div>
              <div className='flex bg-primary text-white justify-center xl:text-[22px] lg:text-[16px] md:text-[14px] text-[12px] flex-wrap'>
        {topberItems.map((item, index) => (
          <Fragment key={index}>
            {index !== 0 && 
              <div className='h-[54px] flex items-center'>
                <Image
                  src="/icons/yellowCircle.svg"
                  alt=""
                  width={1206}
                  height={400}
                  className='w-full h-auto lg:mx-12 md:mx-6 mx-3'
                />
              </div>
            }
            <div className='h-[54px] flex items-center'>{item.name}</div>
          </Fragment>
        ))}
              </div>
            </div>
            </Container>
          </div>
        {/* </Container> */}


        {/* SECTION-03 */}
        <Container className="flex max-lg:flex-col-reverse pt-8 pb-20 gap-12">
          <div className="flex flex-col justify-between max-lg:items-center">
            {bottomList.map((item, index)=>(
              <div className="text-[22px] font-medium" key={index}>
                {item.name}
              </div>
            ))}
            <div className="text-[12px]">EUparts 2009-2023 © All rights reserved </div>
          </div>

         <div className="flex gap-6 max-sm:flex-col">
         <div className="flex flex-col">
            <div className="text-[18px] max-lg:text-[14px] max-md:text-[11px] pb-4">М. Львів, вул. Якась там 36\1</div>
              <Image
                src="/imgs/map1.svg"
                alt=""
                width={723}
                height={355}
                className=''
              />
          </div>

          <div className="flex flex-col">
            <div className="text-[18px] max-xl:text-[14px] max-md:text-[11px] pb-4">Juliusza Słowackiego 35, 22-100 Chełm, Poland</div>
              <Image
                src="/imgs/map2.svg"
                alt=""
                width={720}
                height={350}
                className=''
              />
          </div>
         </div>
        </Container>
    </footer>
  )
}

export default Footer