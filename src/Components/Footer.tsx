import { AccordionFAQ } from "./Accordion-FAQ";

export const Footer = () => {
  return (
    <footer className="z-10 bg-transparent w-full my-4 h-auto flex justify-center">
      <div className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-[45%] h-auto flex flex-col items-center space-y-4">
        <AccordionFAQ/>
      </div>
    </footer>
  )
};