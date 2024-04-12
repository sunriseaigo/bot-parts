import React, { Fragment } from 'react'
import Container from '@/components/Container/Container'
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs";
import CustomAccordion from './Accordion';

const topberItems = [
    { name: 'Легкові авто' },
    { name: 'Вантажівки' },
    { name: 'Спец техніка' },
    { name: 'Шини/диски' },
    { name: 'Аксесуари' },
];

const boxItems1 = [
    {text:'Blandit cursus praesent id nulla. Lobortis duis morbi faucibus vel pretium neque sapien. Arcu fermentum a viverra mi turpis blandit. Egestas blandit elit sed tortor morbi'},
    {text:'In sit commodo at diam. Dignissim aliquam a posuere ac eleifend volutpat interdum. Elementum varius augue lectus massa elit neque turpis condimentum. A pharetra'},
    {text:'Sed etiam vitae diam sagittis sit viverra. Fermentum convallis habitant eget aliquam sagittis sit porttitor. Sed pretium sit ullamcorper aliquet donec nibh vel. Aliquam'},
    {text:'Nam in vitae facilisis nunc consequat. Nulla id justo ultricies volutpat ultrices feugiat. Mi et aliquam magna mauris diam porta ligula. Eu a massa consectetur interdum. Id ut'},
]

const boxItems2 = [
    {text:'Blandit cursus praesent id nulla. Lobortis duis morbi faucibus vel pretium neque sapien. Arcu fermentum a viverra mi turpis blandit. Egestas blandit elit sed tortor morbi justo.'},
    {text:'In sit commodo at diam. Dignissim aliquam a posuere ac eleifend volutpat interdum. Elementum varius augue lectus massa elit neque turpis condimentum. A pharetra auctor tristique erat scelerisque risus sit.'},
    {text:'Sed etiam vitae diam sagittis sit viverra. Fermentum convallis habitant eget aliquam sagittis sit porttitor. Sed pretium sit ullamcorper aliquet donec nibh vel. Aliquam ultrices elit nec commodo amet amet.'},
    {text:'Nam in vitae facilisis nunc consequat. Nulla id justo ultricies volutpat ultrices feugiat. Mi et aliquam magna mauris diam porta ligula. Eu a massa consectetur interdum. Id ut faucibus laoreet sed fringilla risus. Arcu elit.'},
]

const Page6 = () => {
  return (
    <div>
        {/* SECTION */}
        <Image
        src="/imgs/banner.svg"
        alt=""
        width={1206}
        height={400}
        className='w-full h-auto'
      />
      <div style={{ marginTop: '-2px' }} className='px-16 flex bg-primary text-white justify-center xl:text-[22px] lg:text-[16px] md:text-[14px] text-[12px] flex-wrap'>
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


      {/* SECTION-02 */}
      <div className='mt-36 pb-4 text-center text-[36px] max-lg:text-[24px] max-md:text-[18px] font-bold'>
        <Container>Як оплатити автозапчастини з Європи?</Container>
      </div>
      <Container className='flex w-full max-md:flex-col gap-8 pt-12'>
          {/* LEFT */}
          <div className='w-1/2 max-md:w-full'>
            <div className='text-[22px] max-md:text-[18px] font-semibold'>Підзаголовок за необхідності</div>
            <p className='mt-4 text-[20px] max-md:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
          </div>
          {/* Right */}
          <div className='w-1/2 max-md:w-full'>
            <div className='text-[22px] max-md:text-[18px] font-semibold'>Підзаголовок за необхідності</div>
            <p className='mt-4 text-[20px] max-md:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
          </div>
        </Container>


       {/* SECTION-3 */}
        <div className='bg-secondary mt-36 pb-36'>
            <div className='pt-16 text-center text-[36px] max-lg:text-[24px] max-md:text-[18px] font-bold'>
                <Container>Терміни та вартість доставки автозапчастин</Container>
            </div>
            <Container className='pt-16'>
                <div className='text-[22px] font-semibold'>Викуп та доставка по Європі</div>
                <div className='mt- flex flex-wrap justify-center gap-6'>
                {boxItems1.map((item, index)=>(
                    <Fragment key={index}>
                    {index !== 0 && 
                        <div className='flex items-cente pt-20'>
                            <BsArrowRight className='text-[32px]'/>
                        </div>
                    }
                    <div className='border- border-black flex flex-col items-center'>
                        <Image
                            src="/icons/box.svg"
                            alt=""
                            width={120}
                            height={120}
                            className='mt-8'
                        />
                        <div className='text-center max-w-[380px] mt-8 text-[20px]'>
                            {item.text}
                        </div>
                    </div>
                    </Fragment>
                ))}     
                </div>

            </Container>
            <Container className='pt-16'>
                <div className='text-[22px] font-semibold'>Доставка по території України</div>
                <div className='flex flex-wrap justify-center gap-6'>
                {boxItems2.map((item, index)=>(
                    <Fragment key={index}>
                    {index !== 0 && 
                        <div className='flex items-cente pt-20'>
                            <BsArrowRight className='text-[32px]'/>
                        </div>
                    }
                    <div className='border- border-black flex flex-col items-center'>
                        <Image
                            src="/icons/box.svg"
                            alt=""
                            width={120}
                            height={120}
                            className='mt-8'
                        />
                        <div className='text-center max-w-[380px] mt-8 text-[20px]'>
                            {item.text}
                        </div>
                    </div>
                    </Fragment>
                ))}     
                </div>
            </Container>
        </div>


        
       {/* SECTION-04 */}
       <div className='mt-36'>
        <Container>
        <div className='font-semibold text-[36px] text-center text-primary'>Часті питання покупців</div>
        <CustomAccordion/>
        </Container>
      </div>


      <div className="mt-40 py-8 text-primary bg-secondary font-bold text-[32px] text-center">
            <Container className='flex justify-center gap-8 flex-wrap'>
                Залишилися питання? Задайте їх нам!
                <button className='bg-primary text-white text-[22px] py-2 px-8 rounded-[36px]'>Залишити заявку фіол</button>
            </Container>    
      </div>
    </div>
  )
}

export default Page6