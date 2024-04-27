"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Products from "@/components/Products";
import axios from "axios";
import { useProductsContext } from "../Context/ProductsContext";

const section3Items = [
  {
    title: "Консультуємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper.",
  },
  {
    title: "Підбираємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper.",
  },
  {
    title: "Доставляємо",
    des: "Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper.",
  },
];

interface IImage {
  original: string;
  thumbnail: string;
  embeded: string;
  alt: string;
}

interface IProduct {
  title: string;
  price: number;
  currency: string;
}

const Page4 = () => {
  const [imgsList, setImageList] = useState<Array<IImage>>([]);
  const [product, setProduct] = useState<IProduct>(Object);
  const { selectedProduct } = useProductsContext();
  useEffect(() => {
    axios
      .post("/api/detail", { product_id: selectedProduct })
      .then((res) => {
        const product = res.data.result;
        setImageList(product.images);
        setProduct(product);
      })
      .catch((err) => {});
  }, [selectedProduct]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgsList.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgsList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Container className="cursor-pointer pt-8 text-primary text-[16px]">
        <Link className="flex items-center gap-4" href="/page3">
          <FaChevronLeft className="" /> Назад до результатів пошуку
        </Link>

        <div className="flex gap-12 w-full max-lg:flex-col mt-8">
          {/* LEFT */}
          <div className="w-1/2 max-lg:w-full border- border-primary">
            <div className="flex items-center">
              <button onClick={handleLeftClick}>
                <FaChevronLeft className="text-[36px] mr-2" />
              </button>
              <Image
                src={imgsList[currentIndex]?.original}
                alt=""
                width={723}
                height={608}
                className="w-[85%] max-sm:w-[75%]"
              />
              <button onClick={handleRightClick}>
                <FaChevronRight className="text-[36px] ml-2" />
              </button>
            </div>
            {/* Scrollbar */}
            <div className="ml-[45px] mt-6 flex max-w-[723px]">
              {imgsList.map((item, index) => (
                <div key={index} className="">
                  {currentIndex === index ? (
                    <Image
                      onClick={() => setCurrentIndex(index)}
                      src={item.original}
                      alt=""
                      width={120}
                      height={100}
                      className="mr-8 border-4 border-secondary opacity-50"
                    />
                  ) : (
                    <Image
                      onClick={() => setCurrentIndex(index)}
                      src={item.original}
                      alt=""
                      width={120}
                      height={100}
                      className="mr-8"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="w-1/2 max-lg:w-full border- border-primary">
            <div className="font-semibold text-[36px]">{product?.title}</div>
            <div className="text-[22px] font-medium pt-6">Категорія:</div>
            <div className="text-[22px] font-medium pt-6">Стан:</div>
            <div className="font-semibold text-[36px] pt-8">
              {product.currency} {product.price}
            </div>
            <div className="flex max-sm:flex-col mt-8 gap-4 items-center max-sm:items-start">
              <button className="h-[46px] w-[120px] text-[21px] flex items-center justify-center border-2 border-primar rounded-[30px]">
                <span>-</span>
                <span className="mx-4">1</span>
                <span>+</span>
              </button>
              <button className="h-[46px] w-[248px] text-[21px] bg-secondary rounded-[30px]">
                кнопка купити
              </button>
              <span className="text-[16px]">
                Код запчастини: [Номер з Аллегро]
              </span>
            </div>

            <div className="text-[20px] pt-12">Оплата:</div>
            <p className="text-[16px] pt-2">
              Повна передоплата онлайн - передбачає оплату повної суми
              замовлення через сервіс онлайн-платежів на нашому сайті. Ви можете
              сплатити 40% вартості як завдаток, а решту суми оплатити при
              отриманні товару (можлива комісія служби доставки). При оплаті за
              реквізитами ви зможете узгодити з менеджером деталі оплати за
              телефоном, але сума завдатку в будь-якому разі не може бути меншою
              за 40% вартості замовлення.
            </p>
            <div className="text-[20px] pt-8">Доставка:</div>
            <p className="text-[16px] pt-2">
              Після передачі замовлення в Україну, доставка здійснюється
              поштовими службами: Нова пошта, MeestExpress, Delivery та
              Укрпошта. Ви можете обрати зручну для вас службу доставки та
              відділення. Будьте уважні: деякі відділення служб доставки мають
              обмеження по вазі посилки. При виборі відділення, уточніть чи є
              такі обмеження, в іншому разі - служба доставки має право змінити
              відділення прибуття на власний розсуд.
            </p>
          </div>
        </div>
        <div className="mt-32 text-[36px] font-semibold">
          Рекомендовані товари:
        </div>
        <Products totalProducts={4} />
      </Container>

      <div style={{ marginTop: "-120px" }}>
        <div className="bg-secondary pb-40">
          <Container>
            <div className="pt-80 text-[48px] font-semibold pb-20">
              Чому замовляти запчастини у Bot Parts?
            </div>
            <div className="flex gap-8 max-lg:flex-col">
              {section3Items.map((item, index) => (
                <div key={index} className="w-1/3 max-lg:w-full">
                  <div className="pb-4 text-[32px] font-medium">
                    {item.title}
                  </div>
                  <p className="text-[20px]">{item.des}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Page4;
