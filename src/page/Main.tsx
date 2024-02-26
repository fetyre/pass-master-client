import { Header } from "../Components/Header";
import { PasswordInput } from "../Components/PasswordInput";
import { PasswordLengthControl } from "../Components/PasswordLengthControl";
import { GenerateButton } from "../Components/GenerateButton";
import { Footer } from "../Components/Footer";
import { SwitchControls } from "../Components/SwitchControls";
import { Background } from '../Components/Background';
import { useClipboard } from "../Hooks/useClipboard";
import { usePasswordGenerator } from "../Hooks/usePasswordGenerator";


const Main: React.FC = () => {
  const { password, passwordLength, setPasswordLength, includeDigits, setIncludeDigits, lowercase, setLowercase, uppercase, setUppercase, generatePassword } = usePasswordGenerator();
  const { copyToClipboard } = useClipboard();

  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-0 ">
      <Background/>
      <Header/>
      <main className="flex-grow flex flex-col items-center justify-center pt-8 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24 z-10 bg-transparent"> 
        <PasswordInput  password={password} copyToClipboard={() => copyToClipboard(password)}/>
        <PasswordLengthControl passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
        <SwitchControls includeDigits={includeDigits} setIncludeDigits={setIncludeDigits} lowercase={lowercase} setLowercase={setLowercase} uppercase={uppercase} setUppercase={setUppercase}/>
        <GenerateButton generatePassword={generatePassword}/>
      </main>
      <Footer/>
    </div>
  );
};

export default Main;
