import { createContext, useContext } from 'react';

export const LocationContext = createContext(undefined);

export function useLocationContext() {
  const loaction = useContext(LocationContext);
  return loaction;
}
