import { ServerError } from '../types';

export const MIN_NAME_LENGTH = 4;
export const MAX_NAME_LENGTH = 12;

export const MIN_PASSWORD_LENGTH = 8;

export const MESSAGE_REQUIRED = 'Поле обязательно к заполнению';

export const SERVER_ERROR: ServerError = {
  default: 'Ой! Что-то пошло не так...',
  '417': 'Пользователь с таким email уже существует',
};
