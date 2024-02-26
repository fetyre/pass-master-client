import { useState } from "react";

import { useSendFeedback } from "./feedbackSend";
import { useFeedbackFormValidation } from "./form-validation";


export const useFeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { validate } = useFeedbackFormValidation(email, message);
  const { send } = useSendFeedback(email, message, validate);

  return { email, setEmail, message, setMessage, validate, send };
};
