import Image from 'next/image';
import React, { Fragment } from 'react';
import CardWithForm from '../../components/CardWithForm';
import Container from '@/components/Container/Container';
import CustomCarousel from './Carousel';
import CustomAccordion from './Accordion';
import Products from '@/components/Products';

const topberItems = [
  { name: 'Легкові авто' },
  { name: 'Вантажівки' },
  { name: 'Спец техніка' },
  { name: 'Шини/диски' },
  { name: 'Аксесуари' },
];

const section1Items = [
  {
    title: "Шукай",
    des: "Dignissim maecenas pulvinar eros mi gravida eu nisi fermentum mi. Semper sed adipiscing faucibus vulputate vel."
  },
  {
    title: "Замовляй",
    des: "Dignissim maecenas pulvinar eros mi gravida eu nisi fermentum mi. Semper sed adipiscing faucibus vulputate vel.",
  },
  {
    title: "Отримуй",
    des: "Volutpat tincidunt odio etiam iaculis sapien pellentesque. Venenatis sit auctor amet ut ut molestie massa morbi.",
  },
]

const section3Items = [
  {
    title: "Консультуємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper."
  },
  {
    title: "Підбираємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper.",
  },
  {
    title: "Доставляємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper.",
  },
]

const Home = () => {
  return (
    <div>
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

      <Container>
        {/* SECTION-01 */}
        <div className='flex flex-col-reverse lg:flex-row mt-12 gap-12'>
          {/* LEFT */}
          <CardWithForm />
          {/* RIGHT */}
          <div className=''>
            <div className='text-center lg:text-left font-medium text-[48px] max-2xl:text-[36px] max-md:text-[30px] text-primary'>Доставимо запчастини з Європи</div>

            <div className='flex max-sm:flex-col max-sm:items-center mt-4 gap-4 justify-between'>
              {section1Items.map((item, index) => (
                <div key={index} className='max-w-[390px] text-primary flex flex-col items-center border- border-blac'>
                  <Image
                    src="/imgs/manLogo.svg"
                    alt=""
                    width={165}
                    height={173}
                    className='max-2xl:w-[100px] max-2xl:h-[108px] max-xl:w-[80px] max-xl:h-[88px] max-md:w-[40px] max-md:h-[48px]'
                  />
                  <div className='flex justify-center md:text-[32px] text-[22px] my-3'>{item.title}</div>
                  <div className='flex text-center md:text-[18px] text-[14px]'>{item.des}</div>
                </div>
              ))}
            </div>


          </div>
        </div>

        {/* SECTION-02 */}
        <div className='mt-24'>
          <div className='font-semibold text-primary text-[36px] max-2xl:text-[32px] max-md:text-[24px] text-center'>Акційні товари та сезонні пропозиції</div>
          <Products totalProducts={8} />
        </div>
      </Container>

      {/* SECTION-03 */}
      <div className='mt-24'>
        <div className="bg-cover bg-center  h-[562px]"
          style={{
            backgroundImage: "url('/imgs/banner2.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} >
          <Container className='h-[562px]'>
            <div className='max-w-[755px] h-full flex flex-col justify-center'>
              <div className='font-semibold text-[64px] max-xl:text-[48px] max-md:text-[30px] text-white'>
                Доставимо будь-який товар з країн Європи
              </div>
              <div className='pt-8 flex gap-6 max-md:flex-col justify-between font-bold text-[21px]'>
                <button className='bg-secondary w-[360px] h-[64px] max-md:w-[280px]' style={{ borderRadius: '37px' }}>
                  Залишити заявку
                </button>
                <button className='text-secondary w-[360px] h-[64px] max-md:w-[280px] border-2 border-secondary' style={{ borderRadius: '37px' }}>
                  Детальніше про послугу
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* SECTION-04 */}
      <div className='bg-secondary'>
        <Container className='py-36'>
          <div className='text-[48px] pb-20'>Чому замовляти запчастини у Bot Parts?</div>
          <div className='flex gap-8 max-lg:flex-col'>
            {section3Items.map((item, index) => (
              <div key={index} className='w-1/3 max-lg:w-full'>
                <div className='pb-4 text-[32px] font-medium'>{item.title}</div>
                <p className='text-[20px]'>{item.des}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SECTION-05 */}
      <div className='mt-36'>
        <div className='font-semibold text-[36px] text-center text-primary'>Співпрацюємо в Європі та Україні</div>
        <div className='flex justify-center mt-16'>
          <CustomCarousel />
        </div>
      </div>

      {/* SECTION-06 */}
      <div className='mt-36'>
        <Container>
          <div className='font-semibold text-[36px] text-center text-primary'>Відгуки</div>
          <div className='flex max-lg:flex-col gap-8 mt-16'>
            {section3Items.map((item, index) => (
              <div key={index} className='text-primary p-8 w-1/3 max-lg:w-full border-2 border-primary' style={{ borderRadius: '37px' }}>
                <div className='flex max-2xl:flex-col max-lg:flex-row max-sm:flex-col max-2xl:items-start items-center gap-1 justify-between text-[32px] font-medium'>
                  {item.title}
                  <Image
                    src="/imgs/star.png"
                    alt=""
                    width={158}
                    height={27}
                    className='w-[158px] h-[27px]'
                  />
                </div>
                <div className='pb-4 text-gray-400 pt-2'>Останнє замовлення: 23.08.2023</div>
                <p className='text-[20px]'>{item.des}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SECTION-07 */}
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

      {/* SECTION-08 */}
      <div className='mt-36'>
        <Container>
          <div className='font-semibold text-[36px] text-center text-primary'>Часті питання покупців</div>
          <CustomAccordion />
        </Container>
      </div>

      <div className="mt-40 py-8 text-primary bg-secondary font-bold text-[32px] text-center">
        <Container className='flex justify-center gap-8 flex-wrap'>
          Залишилися питання? Задайте їх нам!
          <button className='bg-primary text-white text-[22px] py-2 px-8 rounded-[36px]'>Залишити заявку фіол</button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
