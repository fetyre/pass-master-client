import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export const useSendFeedback = (email: string, message: string, validate: () => Promise<void>) => {
  const send: () => Promise<void> = async () => {
    try {
      await validate();
    } catch (error) {
      toast.error(`Ошибка валидации: ${error}`, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark"
      });
      return;
    }

    try {
      const response: AxiosResponse = await axios.post('http://localhost:3005/feedback', { email, message });
      if(response.status === 201){
        toast.success("Спасибо за ваш отзыв!", {
          position: "bottom-left",
          autoClose: 3000,
          theme: "dark"
        });
        return;
      } 
      toast.error(`Повторите попытку`, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark"
      });
    } catch (error) {
      toast.error(`Ошибка отправки: ${error}`, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  return { send };
};


