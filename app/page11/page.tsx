import Container from '@/components/Container/Container'
import CustomTabs from '@/components/CustomTabs';
import Image from 'next/image'
import React, { Fragment } from 'react'

const topberItems = [
    { name: 'Легкові авто' },
    { name: 'Вантажівки' },
    { name: 'Спец техніка' },
    { name: 'Шини/диски' },
    { name: 'Аксесуари' },
];

const cardItems = [
    {
        num: '10',
        title: 'Років на ринку'
    },
    {
        num: '1500+',
        title: 'Доставлених автозапчастин'
    },
    {
        num: '100+',
        title: 'Автомайстрів нам довіряють'
    },
    {
        num: '800',
        title: 'Щасливих клієнтів'
    },
]

const Page11 = () => {
  return (
    <div className='text-primary'> 
        {/* SECTION */}
        <CustomTabs active="None" />


        <Container className='cursor-pointer pt-8 text-primary text-[16px]'>
          <div className='flex max-lg:flex-col mt-12 gap-12'>
            <div className='w-1/2 max-lg:w-full'>
                <div className='font-bold text-[36px] max-xl:text-[28px] max-lg:text-[22px]'>На «права» дозволять вчитися самостійно. Але отримати їх стало складніше</div>
                <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.
                </p>
            </div>
            <Image 
              src="/imgs/carHeadlight.png"
              alt=''
              width={723}
              height={608}
              className='w-1/2 max-lg:w-full h-auto'
            />
        </div>

        <div className='flex max-lg:flex-col-reverse mt-24 gap-12'>
            <Image 
              src="/imgs/workers.png"
              alt=''
              width={723}
              height={608}
              className='w-1/2 max-lg:w-full h-auto'
            />
            <div className='w-1/2 max-lg:w-full'>
              <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.
              </p>
            </div>
        </div>
    </Container>



    <div className='mt-24 py-8 bg-primary text-white'>
        <Container className='text-center text-[36px] max-xl:text-[28px] max-lg:text-[22px] font-bold'>Краще за нас говорять цифри:</Container>
    </div>
    <Container className='flex max-lg:flex-col max-lg:mt-4 gap-4 justify-between w-full border- border-black'>
        {cardItems.map((item, index)=>(
        <div key={index} className='w-1/4  max-lg:w-full p-8 pb-12 rounded-b-3xl  max-lg:rounded-t-3xl flex flex-col justify-center items-center text-white bg-primary'>
            <div className='text-[64px] font-bold'>{item.num}</div>
            <p className='text-[22px] text-center'>{item.title}</p>
        </div>
        ))}
    </Container>



    <div className='mt-36 py-12 text-primary bg-secondary'>
      <Container className='flex w-1/2  max-lg:w-full'>
        <div className='font-semibold text-[48px] max-xl:text-[38px] max-lg:text-[34px] max-md:text-[28px] max-sm:text-[24px]'>Ми любимо свою роботу і активно ділимося своїм досвідом у соцмережах:</div>
      </Container>
    </div>

    <Container className='flex max-lg:flex-col gap-12 w-full'>
          <div className='w-1/2 max-lg:w-full'>
            {/* <div className='font-semibold text-[48px]'>Ми любимо свою роботу і активно ділимося своїм досвідом у соцмережах:</div> */}
            <div className='pt-12'>Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. </div>
          </div>
          <div className='flex justify-end w-[1/2] max-lg:mt-0 mt-[-250px]'>
            <Image
              src="/imgs/carVideo1.svg"
              alt=""
              width={1206}
              height={400}
              className='w-2/5 max-lg:w-1/2 h-auto'
            />
            <Image
              src="/imgs/carVideo2.svg"
              alt=""
              width={1206}
              height={400}
              className='w-2/5 max-lg:w-1/2 h-auto'
            />
          </div>
    </Container>

    <Container>
      <div className='mt-36 flex max-lg:flex-col gap-12'>
            <div className='w-1/2 max-lg:w-full'>
                <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.
                </p>
            </div>
            <Image 
              src="/imgs/carHeadlight.png"
              alt=''
              width={723}
              height={608}
              className='w-1/2 max-lg:w-full h-auto'
            />
        </div>
    </Container>

    <div className="mt-40 py-8 text-primary bg-secondary font-bold text-[32px] text-center">
      <Container className='flex justify-center gap-8 flex-wrap'>
        Залишилися питання? Задайте їх нам!
        <button className='bg-primary text-white text-[22px] py-2 px-8 rounded-[36px]'>Залишити заявку фіол</button>
      </Container>    
      </div>
    </div>
  )
}

export default Page11