import { FaCopy } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Input } from "./Input";
import { FC, MouseEventHandler } from 'react';

interface PasswordInputProps {
  password: string;
  copyToClipboard: MouseEventHandler<HTMLButtonElement>;
}

export const PasswordInput: FC<PasswordInputProps> = ({ password, copyToClipboard }) => {
  return (
    <div className="flex justify-between items-center p-4 space-x-2 md:space-x-4 lg:space-x-8 w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 mt-1 mb-4 h-auto">
      <Input type="email" value={password} readOnly className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold flex-grow h-12 text-center" />
      <button onClick={copyToClipboard}>
        <FaCopy data-tooltip-id="tooltip-password-copy" className="focus:outline-none" data-tooltip-content="Копировать"/> 
        <Tooltip id="tooltip-password-copy" />
      </button>
    </div>
  )
};
