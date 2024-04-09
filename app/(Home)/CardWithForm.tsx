import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// const cardData = [
//   {
//     placeholder:"Марка авто",
//     option1:"Марка авто",
//     option2:"Модель авто",
//     option3:"Тип запчастини",
//     option4:"Оберіть запчастину",
//   },
//   {
//     placeholder:"Модель авто",
//     option1:"Марка авто",
//     option2:"Модель авто",
//     option3:"Тип запчастини",
//     option4:"Оберіть запчастину",
//   },
//   {
//     placeholder:"Тип запчастини",
//     option1:"Марка авто",
//     option2:"Модель авто",
//     option3:"Тип запчастини",
//     option4:"Оберіть запчастину",
//   },
//   {
//     placeholder:"Марка авто",
//     option1:"Марка авто",
//     option2:"Модель авто",
//     option3:"Тип запчастини",
//     option4:"Оберіть запчастину",
//   },
// ]

export function CardWithForm() {
  return (
    <Card className="w-[421px]">
      <CardHeader >
        <CardTitle className="flex justify-center">Фільтр запчастин</CardTitle>
      </CardHeader>
      <CardContent className="bg-secondary">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework" className="mt-4" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Марка авто" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Марка авто">Марка авто</SelectItem>
                  <SelectItem value="Модель авто">Модель авто</SelectItem>
                  <SelectItem value="Тип запчастини">Тип запчастини</SelectItem>
                  <SelectItem value="Оберіть запчастину">Оберіть запчастину</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework" className="mt-3" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Модель авто" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Марка авто">Марка авто</SelectItem>
                  <SelectItem value="Модель авто">Модель авто</SelectItem>
                  <SelectItem value="Тип запчастини">Тип запчастини</SelectItem>
                  <SelectItem value="Оберіть запчастину">Оберіть запчастину</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework" className="mt-3" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Тип запчастини" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Марка авто">Марка авто</SelectItem>
                  <SelectItem value="Модель авто">Модель авто</SelectItem>
                  <SelectItem value="Тип запчастини">Тип запчастини</SelectItem>
                  <SelectItem value="Оберіть запчастину">Оберіть запчастину</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select>
                <SelectTrigger id="framework" className="mt-3" style={{borderRadius:'45px'}}>
                  <SelectValue placeholder="Оберіть запчастину" />
                </SelectTrigger>
                <SelectContent position="popper" >
                  <SelectItem value="Марка авто">Марка авто</SelectItem>
                  <SelectItem value="Модель авто">Модель авто</SelectItem>
                  <SelectItem value="Тип запчастини">Тип запчастини</SelectItem>
                  <SelectItem value="Оберіть запчастину">Оберіть запчастину</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="mt-3 flex justify-between">
        <Button className="w-full text-white" style={{borderRadius:'45px'}}>Знайти</Button>
      </CardFooter>
    </Card>
  )
}

export default CardWithForm

