import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface PasswordGenerationParams {
  length: number;
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
}

interface PasswordGenerationResponse {
  password: string;
}

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState(''); 
  const [passwordLength, setPasswordLength] = useState(12); 
  const [includeDigits, setIncludeDigits] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);



  const generatePassword: () => Promise<void> = async () => {
    try {
      if(!includeDigits && !lowercase && !uppercase){
        toast.error('Извините, но вы должны выбрать хотя бы одну опцию для генерации пароля. 😕', {
          position: "bottom-right",
          autoClose: 3000,
          theme: "dark"
          });
      }
      const params: PasswordGenerationParams = {
        length: passwordLength,
        numbers: includeDigits,
        lowercase: lowercase,
        uppercase: uppercase,
      };
      const response: AxiosResponse<PasswordGenerationResponse> = await axios.post('http://localhost:3005/generation', params);
      setPassword(response.data.password);
    } catch (error) {
      toast.error(`${error}`, {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark"
        });
    }
  }

  useEffect(() => {
    generatePassword();
  }, []);

  return { password, passwordLength, setPasswordLength, includeDigits, setIncludeDigits, lowercase, setLowercase, uppercase, setUppercase, generatePassword };
};

