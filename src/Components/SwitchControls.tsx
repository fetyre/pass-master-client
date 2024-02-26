import { FC } from 'react';
import { SwitchControl } from "./SwitchControl";


interface SwitchControlsProps {
  includeDigits: boolean;
  setIncludeDigits: (value: boolean) => void;
  lowercase: boolean;
  setLowercase: (value: boolean) => void;
  uppercase: boolean;
  setUppercase: (value: boolean) => void;
}

export const SwitchControls: FC<SwitchControlsProps> = ({ includeDigits, setIncludeDigits, lowercase, setLowercase, uppercase, setUppercase }) => {
  return (
    <div className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 my-4 h-auto flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <SwitchControl id="include-digits" defaultChecked={includeDigits} onCheckedChange={setIncludeDigits} label="Цифры в строке" />
      <SwitchControl id="lowercase" defaultChecked={lowercase} onCheckedChange={setLowercase} label="Нижний регистр" />
      <SwitchControl id="uppercase" defaultChecked={uppercase} onCheckedChange={setUppercase} label="Верхний регистр" />
    </div>
  )
};
