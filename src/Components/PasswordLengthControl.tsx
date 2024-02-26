import { FC } from "react";
import { Label } from "./Label";
import { Slider } from "./Slider";

interface PasswordLengthControlProps {
  passwordLength: number;
  setPasswordLength: (value: number) => void;
}

export const PasswordLengthControl: FC<PasswordLengthControlProps> = ({ passwordLength, setPasswordLength }) => {
  return (
    <div className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-[45%] my-4 h-auto flex flex-col items-center space-y-4"> 
      <Label htmlFor="password-length" className="text-center text-base sm:text-lg md:text-xl lg:text-2xl">Длина пароля: {passwordLength}</Label>
      <Slider id="password-length" min={2} defaultValue={[12]} max={100} step={1} onChange={(value) => Array.isArray(value) && setPasswordLength(value[0])} />
    </div>
  )
};