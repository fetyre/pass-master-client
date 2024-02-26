import { Button } from "./Button";
import { Input } from "./Input";
import { SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetFooter, SheetClose, SheetHeader, Sheet } from "./Sheet";
import { Label } from "./Label";
import { useFeedbackForm } from "../Hooks/useFeedbackForm";

export const FeedbackSheet: React.FC = () => {
  const { setEmail, setMessage, send } = useFeedbackForm();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Обратная связь</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Обратная связь</SheetTitle>
          <SheetDescription>
            Пожалуйста, введите свою электронную почту и сообщение ниже.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" onChange={e => setEmail(e.target.value)} placeholder="example@gmail.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Сообщение
            </Label>
            <Input id="message" onChange={e => setMessage(e.target.value)} placeholder="Крутой сайт!!!😄"  className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={send}>Отправить</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
