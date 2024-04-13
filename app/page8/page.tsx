import React from 'react';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import CardWithForm from '@/components/CardWithForm';
import CustomTabs from '@/components/CustomTabs';

const Page8 = () => {
  return (
    <div className='text-primary'>
        {/* Top Part */}
        <CustomTabs active="Як замовити" />

        {/* Section-01 */}
        <Container>
          <div className='mt-12 flex flex-col-reverse lg:flex-row gap-12'>
            {/* LEFT */}
            <div><CardWithForm/></div>
            {/* RIGHT */}
            <div className=''>
              <div className='text-[22px] max-lg:text-[18px] font-semibold'>1. Оформити замовлення</div> 
              <div className='flex w-full items-center max-xl:flex-col gap-8'>
                <div className='w-1/2 max-xl:w-full'>
                  <p className='mt-4 text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
                </div>
                <div className='w-1/2 max-xl:w-full'>
                  <p className='mt-4 text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* SECTION-02 */}
        <Container>
          <div className='mt-24 text-[22px] max-lg:text-[18px] font-semibold'>2. Обрати товар зі списку пропозицій</div>
          <div className='mt-4 flex max-2xl:flex-col w-full items-center max-lg:flex-col gap-8'>
            {/* Left */}
            <div className='w-1/2 max-2xl:w-full flex max-lg:flex-col gap-3 border- border-primary'>
              {/* Left-01 */}
              <div className='w-1/2 max-lg:w-full flex items-center'>
                <p className='text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
              </div>
              {/* Left-02 */}
              <Image
                src="/imgs/screenshot/ss01.png"
                alt=""
                width={1206}
                height={800}
                className='w-1/2 max-lg:w-full h-auto border-2 border-gray-100'
              />
            </div>
            {/* Right */}
            <div className='w-1/2 max-2xl:w-full flex max-lg:flex-col gap-3 border- border-red-500'>
              {/* Right-01 */}
              <div className='w-1/2 max-lg:w-full flex items-center'>
                <p className='text-[20px] max-lg:text-[14px]'> Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
              </div>
              {/* Right-02 */}
              <Image
                src="/imgs/screenshot/ss02.png"
                alt=""
                width={1206}
                height={800}
                className='w-1/2 max-lg:w-full h-auto border-2 border-gray-100'
              />
            </div>
          </div>
        </Container>

        {/* SECTION-03 */}
        <Container className='mt-24 flex w-full items-center max-lg:flex-col gap-8'>
          {/* LEFT */}
          <div className='w-1/2 max-lg:w-full'>
            <div className='text-[22px] max-lg:text-[18px] font-semibold'>3. Оформити замовлення</div>
            <p className='mt-4 text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
          </div>
          {/* Right */}
          <div className='w-1/2 max-lg:w-full border-2 border-gray-100'>
            <Image
              src="/imgs/screenshot/ss03.png"
              alt=""
              width={1206}
              height={800}
              className='w-full h-auto'
            />
          </div>
        </Container>

        {/* SECTION-04 */}
        <Container>
          <div className='mt-24 text-[22px] max-lg:text-[18px] font-semibold'>4. Підтвердити деталі з менеджером</div>
          <div className='mt-4 flex max-2xl:flex-col w-full items-center max-lg:flex-col gap-8'>
            {/* Left */}
            <div className='w-1/2 max-2xl:w-full flex max-lg:flex-col gap-3 border- border-primary'>
              {/* Left-01 */}
              <div className='w-1/2 max-lg:w-full flex items-center'>
                <p className='text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
              </div>
              {/* Left-02 */}
              <Image
                src="/imgs/screenshot/ss04.png"
                alt=""
                width={1206}
                height={800}
                className='w-1/2 max-lg:w-full h-auto border-2 border-gray-100'
              />
            </div>
            {/* Right */}
            <div className='w-1/2 max-2xl:w-full flex max-lg:flex-col gap-3 border- border-red-500'>
              {/* Right-01 */}
              <div className='w-1/2 max-lg:w-full flex items-center'>
                <p className='text-[20px] max-lg:text-[14px]'> Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
              </div>
              {/* Right-02 */}
              <Image
                src="/imgs/screenshot/ss05.png"
                alt=""
                width={1206}
                height={800}
                className='w-1/2 max-lg:w-full h-auto border-2 border-gray-100'
              />
            </div>
          </div>
        </Container>

        {/* SECTION-5 */}
        <Container className='mt-24 flex w-full items-center max-lg:flex-col gap-8'>
          {/* LEFT */}
          <div className='w-1/2 max-lg:w-full'>
            <div className='text-[22px] max-lg:text-[18px] font-semibold'>5. Забрати посилку та поділитися враженнями від покупки автозапчастин на EUparts</div>
            <p className='mt-4 text-[20px] max-lg:text-[14px]'>Nulla cras et scelerisque neque in at est. Pharetra nulla vitae id aliquam bibendum aliquam tincidunt tristique nec. Consectetur ac arcu nunc vestibulum sit mattis sed. Tellus parturient tellus amet quis nibh quis est habitant viverra. Eros morbi aliquet vestibulum velit sapien. Ut justo sapien non vitae hac nunc quis at. Pulvinar gravida viverra eu lorem nisl. Convallis imperdiet amet sagittis cras habitant aliquam amet auctor amet. Tristique porta sit sed sed hendrerit non. Amet sed tempus in cursus gravida proin leo. Quisque rhoncus in etiam suspendisse mus elit. Diam suspendisse at enim massa amet pellentesque nibh posuere.</p>
          </div>
          {/* Right */}
          <div className='w-1/2 max-lg:w-full border-2 border-gray-100'>
            <Image
              src="/imgs/screenshot/ss06.png"
              alt=""
              width={1206}
              height={800}
              className='w-full h-auto'
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
  );
}

export default Page8;
