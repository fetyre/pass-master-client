import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

export const AccordionFAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold text-lg sm:text-xl md:text-2xl">Как генерируются пароли?</AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Пароли генерируются с использованием библиотеки `generate-password`, которая создает безопасные случайные пароли.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold text-lg sm:text-xl md:text-2xl">Могу ли я выбрать длину пароля?</AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Да, вы можете выбрать длину пароля с помощью слайдера. Минимальная длина пароля - 2 символов.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold text-lg sm:text-xl md:text-2xl">Какие символы включены в пароль?</AccordionTrigger>
        <AccordionContent className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Пароль может включать цифры, строчные и прописные буквы. Специальные символы исключены.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};

