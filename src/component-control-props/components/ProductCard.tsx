import { createContext, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';

import { onChangeArgs, Product, ProductCardContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductCardContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, onChange, value }: Props) => {
  const { counter, increaseCounterBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseCounterBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
