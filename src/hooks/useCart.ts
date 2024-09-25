import { useState } from 'react';
import { onChangeProps, ProductInCart } from "../interfaces/index";



export const useShoppingCart = () => {

    const [cart, setCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}: onChangeProps ) => {
    if(count === 0){
      const newCart = {...cart};
      delete newCart[product.id]; /* ←sirve para borrar un parametro del objeto, recibiendo el identificador de ese parametro */
      setCart(newCart);
    } else {
      setCart({
        ...cart,
        [product.id]: {
          ...product,
          count
        }
      });
    }     
  }

    return {
        cart,
        onProductCountChange,
    }

}