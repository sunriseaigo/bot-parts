import Container from '@/components/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const Page10 = () => {
    const productArray = new Array(4).fill(null);
  return (
    <div>
        <Container className='cursor-pointer pt-8 text-primary text-[16px]'>
            <Link className='flex items-center gap-4' href="/page3">
                <FaChevronLeft className=''/> Назад до публікацій
            </Link>

        <div className='flex max-lg:flex-col mt-12 gap-12'>
            <div className='w-1/2 max-lg:w-full'>
                <div className='font-bold text-[36px] max-xl:text-[28px] max-lg:text-[22px]'>На «права» дозволять вчитися самостійно. Але отримати їх стало складніше</div>
                <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Tortor semper mauris diam volutpat mattis proin non et. Ut ut nunc pharetra eu praesent cursus libero felis suscipit. Odio in mattis nullam eget amet integer facilisi facilisi. Sit commodo at in tortor eu semper laoreet etiam. Risus porttitor in consectetur venenatis interdum potenti. Non tellus lectus egestas vitae duis imperdiet adipiscing pellentesque neque. Nisl pellentesque cursus eget dignissim vulputate. Nullam justo facilisis vitae vivamus tincidunt.
                    Lectus feugiat diam vel sed pulvinar. Sit elit nunc massa lacus. Suspendisse ipsum dui non commodo mi feugiat ac. Semper commodo suspendisse convallis purus adipiscing. Aliquam quam pretium donec ut. Mauris molestie parturient elementum sed. A purus enim volutpat scelerisque enim ornare sit. Mollis lectus nunc tincidunt id amet ut.
                    Habitant sagittis tempor nulla diam at praesent iaculis. Praesent ultrices lectus cras sagittis libero nam viverra sodales mauris. Scelerisque a varius feugiat ut volutpat rhoncus sed.
                </p>
            </div>
            <Image 
                src="/imgs/driving.png"
                alt=''
                width={723}
                height={608}
                className='w-1/2 max-lg:w-full h-auto'
            />
        </div>




        <div className='flex max-lg:flex-col mt-12 gap-12'>
            <div className='w-1/2 max-lg:w-full'>
                {/* <div className='font-bold text-[36px] max-xl:text-[28px] max-lg:text-[22px]'>На «права» дозволять вчитися самостійно. Але отримати їх стало складніше</div> */}
                <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Tortor semper mauris diam volutpat mattis proin non et. Ut ut nunc pharetra eu praesent cursus libero felis suscipit. Odio in mattis nullam eget amet integer facilisi facilisi. Sit commodo at in tortor eu semper laoreet etiam. Risus porttitor in consectetur venenatis interdum potenti. Non tellus lectus egestas vitae duis imperdiet adipiscing pellentesque neque. Nisl pellentesque cursus eget dignissim vulputate. Nullam justo facilisis vitae vivamus tincidunt.
                    Lectus feugiat diam vel sed pulvinar. Sit elit nunc massa lacus. Suspendisse ipsum dui non commodo mi feugiat ac. Semper commodo suspendisse convallis purus adipiscing. Aliquam quam pretium donec ut. Mauris molestie parturient elementum sed. A purus enim volutpat scelerisque enim ornare sit. Mollis lectus nunc tincidunt id amet ut.
                    Habitant sagittis tempor nulla diam at praesent iaculis. Praesent ultrices lectus cras sagittis libero nam viverra sodales mauris. Scelerisque a varius feugiat ut volutpat rhoncus sed.
                </p>
            </div>
            <div className='w-1/2 max-lg:w-full'>
                <p className='mt-8 text-[20px] max-xl:text-[16px] max-lg:text-[14px]'>Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Tortor sodales in aliquam vitae. Vestibulum lacus quisque neque nulla. Nec est massa etiam feugiat lacinia nisl sed viverra. Interdum ornare suspendisse pulvinar phasellus tristique turpis. Tellus mauris tellus cursus auctor adipiscing est quam. Tellus non morbi nisl mi sodales tincidunt commodo. Mollis semper massa rhoncus senectus sed quam pellentesque. Porta turpis elit interdum vestibulum venenatis volutpat convallis. A sem egestas nunc lacus turpis. Nibh faucibus mauris quam enim egestas in turpis. Leo mi varius at neque mattis condimentum at. Tellus purus sed ut mauris eget pellentesque dignissim lorem nulla.
                    Tortor semper mauris diam volutpat mattis proin non et. Ut ut nunc pharetra eu praesent cursus libero felis suscipit. Odio in mattis nullam eget amet integer facilisi facilisi. Sit commodo at in tortor eu semper laoreet etiam. Risus porttitor in consectetur venenatis interdum potenti. Non tellus lectus egestas vitae duis imperdiet adipiscing pellentesque neque. Nisl pellentesque cursus eget dignissim vulputate. Nullam justo facilisis vitae vivamus tincidunt.
                    Lectus feugiat diam vel sed pulvinar. Sit elit nunc massa lacus. Suspendisse ipsum dui non commodo mi feugiat ac. Semper commodo suspendisse convallis purus adipiscing. Aliquam quam pretium donec ut. Mauris molestie parturient elementum sed. A purus enim volutpat scelerisque enim ornare sit. Mollis lectus nunc tincidunt id amet ut.
                    Habitant sagittis tempor nulla diam at praesent iaculis. Praesent ultrices lectus cras sagittis libero nam viverra sodales mauris. Scelerisque a varius feugiat ut volutpat rhoncus sed.
                </p>
            </div>
        </div>
    </Container>


    <div className='mt-24 h-[400px] bg-secondary text-primary'>
        <Container>
            <div className='pt-16 font-bold text-[36px] max-xl:text-[28px] max-lg:text-[22px]'>Читайте також інші статті:</div>
        </Container>
    </div>

    <Container>
        <div style={{marginTop:'-240px'}} className='flex justify-center gap-6 flex-wrap mt-12'>
                {productArray.map((_, index)=>(
                <div key={index} className='bg-white w-[420px] max-2xl:w-[380px] max-xl:w-[340px] max-lg:w-[300px] max-md:w-[240px] max-sm:w-full rounded-[20px] p-4 border-2 border-gray-300'>
                    <Image
                        src="/imgs/cars/car1.png"
                        alt=""
                        width={1206}
                        height={400}
                        className='w-full h-auto'
                    />
                    <p className='pt-2 text-[22px] max-lg:text-[18px] max-md:text-[16px] font-bold'>На «права» дозволять вчитися самостійно. Але отримати їх стало складніше</p>
                    <div className='pt-4 text-[18px] max-lg:text-[16px] max-md:text-[14px] flex max-md:flex-col justify-between'>
                        <span>23.05.2023</span>
                        <span>Читати повністю</span>
                    </div>
                </div>))}
            </div>
    </Container>

    <div className='mt-40' />
    </div>
  )
}

export default Page10