import * as yup from 'yup';

export const emailValidationSchema = yup.string()
  .required('Email обязателен')
  .email('Введите действительный адрес электронной почты');

