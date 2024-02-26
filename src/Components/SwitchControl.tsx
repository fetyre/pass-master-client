import { FC } from 'react';
import { Switch } from './Switch';
import { Label } from './Label';

interface SwitchControlProps {
  id: string;
  defaultChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
}

export const SwitchControl: FC<SwitchControlProps> = ({ id, defaultChecked, onCheckedChange, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} defaultChecked={defaultChecked} onCheckedChange={onCheckedChange}/>
      <Label htmlFor={id} className="ml-2 text-base sm:text-lg md:text-xl lg:text-2xl">{label}</Label>
    </div>
  )
};
