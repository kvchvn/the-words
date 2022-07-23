import { LOCAL_STORAGE_KEYS } from '../constants';

export const getFromLocalStorage = <T>(key: keyof typeof LOCAL_STORAGE_KEYS) => {
  const value = localStorage.getItem(key);
  const deserializer = (value: string): T => JSON.parse(value);
  return value ? deserializer(value) : null;
};

export const setToLocalStorage = <T>(key: keyof typeof LOCAL_STORAGE_KEYS, value: T) => {
  const serializer = (value: T): string => JSON.stringify(value);
  localStorage.setItem(key, serializer(value));
};

export const removeFromLocalStorage = (key: keyof typeof LOCAL_STORAGE_KEYS) =>
  localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();

export const toUpperCaseFirstLetter = (value: string): string =>
  `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
