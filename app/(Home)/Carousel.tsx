import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const imgLinks = [
    {imgLink:"/imgs/slider1.svg"},
    {imgLink:"/imgs/slider2.svg"},
    {imgLink:"/imgs/slider3.svg"},
    {imgLink:"/imgs/slider4.svg"},
    {imgLink:"/imgs/slider5.svg"},
    {imgLink:"/imgs/slider6.svg"},
    {imgLink:"/imgs/slider7.svg"},
    {imgLink:"/imgs/slider8.svg"},
    {imgLink:"/imgs/slider9.svg"},
    {imgLink:"/imgs/slider10.svg"},
    {imgLink:"/imgs/slider11.svg"},
]

export function CarouselSpacing() {
  return (
    
    <div className="CarouselElement">
    <Carousel className="">
      <CarouselContent className="-ml-1 border- border-blac">
        {imgLinks.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <div className="p-1 items-center flex">
            <Image
                    src={item.imgLink}
                    alt=""
                    width={270}
                    height={132}
                    // className='w-full h-auto'
                />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default CarouselSpacing