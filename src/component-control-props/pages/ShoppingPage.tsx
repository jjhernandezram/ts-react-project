import ProductCard from '../components';

import { product } from '../data/data';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {product.map((product) => (
          <ProductCard
            product={product}
            className='bg-dark'
            key={product.id}
            initialValues={{
              count: 1,
              maxValue: product.inStock,
            }}
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Title className='text-white' />
            <ProductCard.Buttons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className='bg-dark shopping-cart-items'
            key={key}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Image className='custom-image' />
            <ProductCard.Buttons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
