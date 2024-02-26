import { FC } from "react";
import { Button } from "./Button";

interface GenerateButtonProps {
  generatePassword: () => Promise<void>
}

export const GenerateButton: FC<GenerateButtonProps> = ({ generatePassword }) =>{
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 my-4 h-auto flex justify-center">
      <Button  className="text-base sm:text-lg md:text-xl lg:text-2xl" onClick={generatePassword}>Сгенерировать</Button>
    </div>
  )
};