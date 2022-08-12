import * as yup from 'yup';

import {
  MAX_NAME_LENGTH,
  MIN_NAME_LENGTH,
  MESSAGE_REQUIRED,
  MIN_PASSWORD_LENGTH,
} from '../../constants';

const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required(MESSAGE_REQUIRED)
    .min(MIN_NAME_LENGTH, `Имя должно быть не менее ${MIN_NAME_LENGTH} символов`)
    .max(MAX_NAME_LENGTH, `Имя должно быть не более ${MAX_NAME_LENGTH} символов`),
  email: yup.string().required(MESSAGE_REQUIRED).email('Введите email в формате xxxx@yyyy.zz'),
  password: yup
    .string()
    .required(MESSAGE_REQUIRED)
    .min(MIN_PASSWORD_LENGTH, `Пароль должен быть не менее ${MIN_PASSWORD_LENGTH} символов`),
});

export default signUpValidationSchema;
