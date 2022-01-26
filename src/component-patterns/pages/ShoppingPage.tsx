import ProductCard, { ProductImg, ProductTitle, ProductButtons } from '../components';

import '../styles/custom-styles.css';

import { Product } from '../interfaces/interfaces';

const product: Product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white' />
          <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>

        <ProductCard product={product}>
          <ProductImg className='custom-image'/>
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
