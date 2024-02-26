import { Button } from "./Button";
import { SheetTrigger, SheetContent, Sheet } from "./Sheet";
import { ShareDialog } from "./ShareDialog";
import { FeedbackSheet } from "./FeedbackSheet";
import { MenuIcon } from "lucide-react";

export const Hamburger: React.FC = () => {

  return (
    <Sheet>
    <SheetTrigger asChild>
      <MenuIcon className="h-6 w-6" />
    </SheetTrigger>
    <SheetContent>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 gap-4 items-center">
          <ShareDialog />
          <FeedbackSheet />
        </div>
      </div>
    </SheetContent>
  </Sheet>
  );
};