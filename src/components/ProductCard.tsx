import React, { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChange, Product, ProductCardHndlers, ProductContextInterface } from "../interfaces";

import styles from "../styles/styles.module.css";

/* Create context es la definicion de las variables que queremos que los hijos reciban directamente al  usar el 
    context provider, en este caso el context provider es ProductCard, y los hijos de ProductCard son los componentes
    que se encuentran dentro de ProductCard, en este caso el children es el componente que se encuentra dentro de ProductCard
*/
export const ProductContext = createContext<ProductContextInterface>(
  {} as ProductContextInterface
);
const { Provider } = ProductContext;
interface Props {
  product: Product;
  /* children?: React.ReactNode; */
  children: (args : ProductCardHndlers) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties
  onChange?: onChange;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  
  const { count, decrement, increment, reset, isMaxReached } = useProduct({onChange, product, value, initialValues});

  return (
    /* Aqui tenemos al provider, todos los hijos dentro del provider podran acceder a sus valores */
    <Provider
      value={{
        count,
        decrement,
        increment,
        product,
        maxCount: initialValues?.maxCount || Infinity,
        isMaxReached
      }}
    >
      <div className={`${styles.productCard} ${ className}` } style={style}>
        {
          children({
            count,
            product,
            decrement,
            increment,
            reset,
            isMaxReached
          })
        }
      </div>
    </Provider>
  );
};
