import { FeedbackSheet } from "./FeedbackSheet";
import { Hamburger } from "./Hamburger";
import { ShareDialog } from "./ShareDialog";

export const Header = () => {
  return (
    <header className="z-10 bg-transparent h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 border-b border-gray-600 text-black w-full flex items-center justify-between px-4 font-kode relative">
      <div className="hidden lg:flex justify-start w-1/3">
        <ShareDialog/>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl absolute left-1/2 transform -translate-x-1/2">PassMaster</h1>
      <div className="flex justify-end w-1/3">
        <div className="hidden lg:block">
        <FeedbackSheet/>
        </div>
        <div className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <Hamburger/>
        </div>
      </div>
    </header>
  )
};