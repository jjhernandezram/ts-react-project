import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounterBy = (number: number) => {
    setCounter((prev) => Math.max(prev + number, 0));
  };

  return { counter, increaseCounterBy };
};
