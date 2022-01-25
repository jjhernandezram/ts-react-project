import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';

import { ProductCardContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseCounterBy } = useProduct();
  return (
    <Provider value={{ counter, increaseCounterBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
