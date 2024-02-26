import { toast } from 'react-toastify';
import * as yup from 'yup';
import { emailValidationSchema, messageValidationSchema } from '../validate';


interface FeedbackFormValues  {
  email: string;
  message: string
}

export const useFeedbackFormValidation = (email: string, message: string) => {
  const validate: () => Promise<void> = async () => {
    try {
      const feedbackFormValues: FeedbackFormValues = { email, message };
      await yup.object({
        email: emailValidationSchema,
        message: messageValidationSchema
      }).validate(feedbackFormValues);
    } catch (error) {
      toast.error(`${error}`, {
        position: "bottom-left",
        autoClose: 3000,
        theme: "dark"
      });
    }
  };

  return { validate };
};
