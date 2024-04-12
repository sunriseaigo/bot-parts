import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export function CustomAccordion() {
    return (
      <div className="flex max-xl:flex-col gap-24 max-xl:gap-0 mt-16 text-primary">
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[22px] ">Які автозапчастини ви доставляєте?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[22px]">Скільки коштує замовлення автозапчастин з Європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[22px]">Які терміни доставки вживаних автозапчастин з європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[22px]">Як здійснюється оплата замовлення?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[22px]">Які терміни доставки вживаних автозапчастин з європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[22px]">Скільки коштує замовлення автозапчастин з Європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[22px]">Скільки коштує замовлення автозапчастин з Європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[22px]">Які терміни доставки вживаних автозапчастин з європи?</AccordionTrigger>
          <AccordionContent className="text-[18px]">
          Commodo volutpat aliquet a placerat cras. Id morbi lacus ac faucibus in orci et nunc. Malesuada senectus dignissim adipiscing tincidunt ut. Dignissim facilisi magna facilisis at pulvinar vulputate tristique. Sed ultricies commodo mi maecenas velit accumsan sed. Fringilla viverra quis sociis justo turpis turpis sit. Sit sollicitudin netus in erat bibendum diam vitae ullamcorper. 
          </AccordionContent>
        </AccordionItem>
        </Accordion>
      </div>
    )
  }

export default CustomAccordion
  