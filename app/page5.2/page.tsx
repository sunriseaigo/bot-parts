import React from 'react';
import Container from '@/components/Container/Container';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page5_2 = () => {
  const listArray = new Array(3).fill(null);
  return (
    <Container>
      <div className='min-h-screen pt-12 text-primary'>

        <section className='flex gap-12 max-xl:flex-col'>
          <div className=''>
            <div className='mb-12 flex max-sm:flex-col gap-8'>
              <div className='flex items-center gap-3'>
                <div className='h-[44px] w-[44px] bg-secondary text-white text-[32px] max-md:text-[24px] flex items-center justify-center rounded-full'>1</div>
                <span className='text-[22px] text-secondary max-md:text-[16px]'>Заповніть дані покупця</span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='h-[44px] w-[44px] bg-primary text-white text-[32px] max-md:text-[24px] flex items-center justify-center rounded-full'>2</span>
                <span className='text-[22px] max-md:text-[16px] text-primary'>Доставка та оплата</span>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full justify-between max-xl:flex-col gap-12 flex'>
          {/* width-first 66% */}
          <div className='w-4/6 max-xl:w-full max-md:flex-col gap-16 max-w-[924px] justify-between flex'>
            {/* first-left */}
            <div className='max-w-[300px] max-md:max-w-full border-r- border-primary'>
              <div className='mb-12 text-[22px] font-semibold'>Ваше замовлення:</div>
              {listArray.map((_, index) => (
                <div key={index} className='mb-6'>
                  <div className='text-[16px]'>
                    <p>Шторка сонцезахисна CarLife на ролеті 90х57 см</p>
                    <div className='pt-2 flex justify-between'>
                      <span>1 шт</span>
                      <span>391₴</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className='mt-2 border-t-2 border-primary flex justify-between'>
                <span className='text-[22px] font-semibold'>Разом:</span>
                <span className='text-[22px] font-semibold'>13 662₴</span>
              </div>
            </div>
            {/* first-right */}
            <div>
              <div className='text-[22px] font-semibold'>Обреіть спосіб доставки:</div>
              <RadioGroup className='mt-1' defaultValue="Нова пошта">
                <div className="mt-2 flex items-center space-x-2">
                  <RadioGroupItem value="Нова пошта" id="Нова пошта" />
                  <Label htmlFor="Нова пошта">Нова пошта</Label>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <RadioGroupItem value="Мeest Express" id="Мeest Express" />
                  <Label htmlFor="Мeest Express">Мeest Express</Label>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <RadioGroupItem value="Delivery" id="Delivery" />
                  <Label htmlFor="Delivery">Delivery</Label>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <RadioGroupItem value="Укрпошта" id="Укрпошта" />
                  <Label htmlFor="Укрпошта">Укрпошта</Label>
                </div>
              </RadioGroup>
              <div className='mt-12 text-[22px] font-semibold'>Дані для відправки</div>
              <div className='flex gap-4'>
                <Input className='mt-4' placeholder='Iм’я' />
                <Input className='mt-4' placeholder='Прізвище' />
              </div>
              <Input className='mt-4' placeholder='Номер телефону одержувача' />
              <div className='flex gap-4'>
                <Input className='mt-4' placeholder='Область' />
                <Input className='mt-4' placeholder='Місто' />
              </div>
              <Select>
                <SelectTrigger id="framework" className="mt-3" style={{ borderRadius: '45px' }}>
                  <SelectValue placeholder="Оберіть відділення" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Оберіть відділення">Оберіть відділення</SelectItem>
                  <SelectItem value="Оберіть відділення 11">Оберіть відділення 11</SelectItem>
                  <SelectItem value="Оберіть відділення 22">Оберіть відділення 22</SelectItem>
                  <SelectItem value="Оберіть відділення 33">Оберіть відділення 33</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
          {/* width-last 33% */}
          <div className='mb-40 max-xl:mt-16 w-2/6 max-xl:w-full border- border-black'>
            <div className='text-[22px] font-semibold'>Обреіть спосіб оплати:</div>
            <div className='mt-3 text-[18px]'>
              <div className='mt-2'>Повна передоплата онлайн</div>
              <div className='mt-2'>Завдаток 40% онлайн</div>
              <div className='mt-2'>Оплата за реквізитами</div>
            </div>


            <div className='mt-12 text-[20px]'>Способи оплати:</div>
            <p className='text-[16px]'>Повна передоплата онлайн - передбачає оплату повної суми замовлення через сервіс онлайн-платежів на нашому сайті. Ви можете сплатити 40% вартості як завдаток, а решту суми оплатити при отриманні товару (можлива комісія служби доставки). При оплаті за реквізитами ви зможете узгодити з менеджером деталі оплати за телефоном, але сума завдатку в будь-якому разі не може бути меншою за 40% вартості замовлення.</p>

            <button className='mt-12 py-2 px-8 text-[21px] rounded-[36px] text-white bg-primary'>Підтвердити та оплатити</button>
          </div>
        </section>

      </div>

      {/* <div className='mt-40' /> */}
    </Container>
  );
}

export default Page5_2;
