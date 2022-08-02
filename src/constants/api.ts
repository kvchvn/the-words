import { ServerError } from '../types';

export const BASE_URL = 'https://rs-lang-1.herokuapp.com';

export const ENDPOINTS = {
  signin: '/signin',
  words: '/words',
  users: '/users',
  aggregatedWords: '/aggregatedWords',
  statistics: '/statistics',
  settings: '/settings',
  tokens: '/tokens',
};

export const SERVER_ERROR: ServerError = {
  default: 'Ой! Что-то пошло не так...',
  '417': 'Пользователь с таким email уже существует',
  '403': 'Неправильный пароль',
  '404': {
    authorization: 'Пользователь с таким email не найден',
    words: 'Слово не найдено',
  },
};

export const TOKEN_EXPIRED_ERROR = 401;
