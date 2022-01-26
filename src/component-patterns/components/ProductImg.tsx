import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  className?: string;
}

export const ProductImg = ({ img = '', className }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  img ? (imgToShow = img) : product.img ? (imgToShow = product.img) : (imgToShow = noImage);

  return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt='coffe mug' />;
};
