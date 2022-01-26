import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({ className }: Props) => {
  const { product } = useContext(ProductContext);
  return <span className={`${styles.productDescription} ${className}`}>{product.title}</span>;
};
