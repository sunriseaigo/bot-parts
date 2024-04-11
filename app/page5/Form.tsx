import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"



export function Form() {
  return (
    <Card className="xl:w-[421px] w-full">
      <CardHeader >
        <CardTitle className="flex justify-center">Дані покупця</CardTitle>
      </CardHeader>
      <CardContent className="bg-secondary">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Input className="mt-3" style={{borderRadius:'45px'}} placeholder="Iм’я"/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Input className="mt-3" style={{borderRadius:'45px'}} placeholder="Прізвище"/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Input className="mt-3" style={{borderRadius:'45px'}} placeholder="E-mail"/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input className="mt-3" style={{borderRadius:'45px'}} placeholder="Номер телефону"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="mt-3 flex justify-between">
        <Button className="w-full text-white" style={{borderRadius:'45px'}}>Перейти до оформлення</Button>
      </CardFooter>
    </Card>
  )
}

export default Form

