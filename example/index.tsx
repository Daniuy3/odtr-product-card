import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const prod = {
  id: "1",
  title: "Glass Bottle",
  img: "./coffee-mug2.png",
  description: "A stylish glass bottle for your beverages.",
};

const App = () => {
  return (
    <>
      <ProductCard
            initialValues={{
              count: 4,
              maxCount:10
            }}
            product={prod}
            style={{ padding: 15 }}
          >
            {
              () => (
                <>
                  <ProductImage/>
                  <ProductTitle  />
                  <ProductButtons />
                </>               
              )
            }
          </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
