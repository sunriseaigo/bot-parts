import Container from "@/components/Container/Container";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const telephoneList = [
  {num:'+380 000 000 00 00'},
  {num:'+380 000 000 00 00'},
  {num:'+380 000 000 00 00'},
  {num:'+480 000 000 00 00'},
]

const bottomList = [
  {name:"Відстежити"},
  {name:"Як замовити"},
  {name:"Оплата та доставка"},
  {name:"Гарантія та повернення"},
  {name:"Про нас"},
  {name:"Блог"},
  {name:"Контакти"},
]

const Connect = () => {
  return (
    <footer className="text-primary">
        {/* <Container> */}



        {/* SECTION-01 */}
        <Container className="max-sm:flex-col min-h-screen flex justify-between w-full gap-12 text-primary">
          <div className="w-2/5 flex max-lg:flex-col  gap-8">
            <div className="">
              <div className="font-bold text-[36px] mt-8 mb-2">Контакти</div>
              {telephoneList.map((item, index)=>(
                <div className="mt-3 flex items-center" key={index} >
                  <FaPhoneAlt className="mr-2"/>{item.num}
                </div>
              ))}

              <div className="font-bold text-[22px] mt-16 mb-2">Корпоративним клієнтам:</div>
              <div className="mt-3 flex items-center" >
                  <FaPhoneAlt className="mr-2"/>+480 000 000 00 00
                </div>
            </div>

            <div className="mt-20 max-lg:mt-8 text-[18px]">
              <div>@example@gmail.com</div>
              <div className="pt-8">Слідкуйте за нами:</div>
              <div className="flex gap-2 mt-2 text-[40px]">
                <RiInstagramFill /> <FaFacebookSquare /> <FaTiktok />
              </div>
            </div>
          </div>

         <div className="max-sm:items-center max-sm:w-full  w-3/5 mt-12 mb-16 flex  gap-12 max-2xl:flex-col max-2xl:items-end">
         <div className="flex flex-col">
            <div className="text-[18px] max-lg:text-[14px] max-md:text-[11px] pb-4">М. Львів, вул. Якась там 36\1</div>
              <Image
                src="/imgs/map1.svg"
                alt=""
                width={580}
                height={400}
                className=''
              />
          </div>

          <div className="flex flex-col">
            <div className="text-[18px] max-xl:text-[14px] max-md:text-[11px] pb-4">Juliusza Słowackiego 35, 22-100 Chełm, Poland</div>
              <Image
                src="/imgs/map2.svg"
                alt=""
                width={580}
                height={400}
                className=''
              />
          </div>
         </div>
        </Container>



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
            <div className="flex gap-12 max-md:flex-col w-full justify-between items-center">
              <div className="max-w-[570px] text-[52px] max-xl:text-[36px] max-lg:text-[24px] max-md:text-[36px] max-md:text-center max-sm:text-[30px] text-secondary font-semibold">
                Рух. Швидкість. Сила. Усе для твого авто
              </div>
              <div className='flex gap-3 flex-col max-md:text-center bg-primary text-white justify-center flex-wrap'>
              {bottomList.map((item, index)=>(
              <div className="text-[22px] max-xl:text-[18px]  max-lg:text-[14px] font-medium" key={index}>
                {item.name}
              </div>
            ))}
            <div className="text-[12px]">EUparts 2009-2023 © All rights reserved </div>
              </div>
            </div>
            </Container>
          </div>
    </footer>
  )
}

export default Connect