import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImg } from './ProductImg';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImg } from './ProductImg';
export { ProductTitle } from './ProductTitle';


const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});

export default ProductCard;
