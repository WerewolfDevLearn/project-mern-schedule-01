import { createContext, useContext } from 'react';

export const DatepickerContext = createContext(undefined);

export function useDatepickerContext() {
  const setDate = useContext(DatepickerContext);
  if (setDate === undefined) {
    throw new Error('setDate is missing form context');
  }
  return setDate;
}
