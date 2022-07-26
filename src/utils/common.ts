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

export const disableScrolling = () => (document.body.style.overflow = 'hidden');

export const enableScrolling = () => (document.body.style.overflow = 'unset');

export const getRandomBetween = (min: number, max: number) => {
  const modifiedMin = Math.ceil(min);
  const modifiedMax = Math.floor(max);
  return Math.floor(Math.random() * (modifiedMax - modifiedMin + 1)) + modifiedMin;
};

export const playAudio = (src: string, playbackRate = 1) => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(src);
    audio.preload = 'auto';
    audio.autoplay = true;
    audio.playbackRate = playbackRate;
    audio.onerror = () => reject();
    audio.onended = () => {
      audio.remove();
      resolve(undefined);
    };
  });
};

export const getDateByWeekday = (dayIndex: number) => {
  const date = new Date();
  const currentDate = date.getDate();
  let currentDay = date.getDay();
  if (currentDay === 0) {
    // correction so that weekday's indexes will be from 1 to 7
    currentDay = 7;
  }
  const gap = dayIndex - currentDay;
  return String(new Date(date.setDate(currentDate + gap)));
};

export const toUpperCaseFirstLetter = (str: string) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
