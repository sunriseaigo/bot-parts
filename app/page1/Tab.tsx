import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Tab = () => {
  return (
    <div>
        <Tabs defaultValue="Для легкових авто" className="w-[400px">
  <TabsList>
    <TabsTrigger value="Для легкових авто">Для легкових авто</TabsTrigger>
    <TabsTrigger value="Для вантажних авто">Для вантажних авто</TabsTrigger>
    <TabsTrigger value="Для спецтехніки">Для спецтехніки</TabsTrigger>
    <TabsTrigger value="Для мототранспорту">Для мототранспорту</TabsTrigger>
    <TabsTrigger value="Для позашляховиків">Для позашляховиків</TabsTrigger>
  </TabsList>
  {/* <TabsContent value="setValue">Make changes here.</TabsContent> */}
  {/* <TabsContent value="setValue">Change here.</TabsContent> */}
</Tabs>

    </div>
  )
}

export default Tab