import { useEffect, useRef, useState } from "react";
import { InitialValues, onChange, Product } from "../interfaces";

interface Props {
  product: Product;
  onChange?: onChange;
  value?: number;
  initialValues?: InitialValues;
}

    export const useProduct = ({
    onChange,
    product,
    value = 0, /* ← Le indico que si no obiente un valor de primera ponga el 0 */
    initialValues,
    }: Props) => {
  const [count, setCount] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    setCount(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      /* ← Lo que se ejecuta cuando el componente se desmonta */
      isMounted.current = false;
    };
  }, []);

  const increment = () => {
    const newValue = count + 1;
    if (newValue <= (initialValues?.maxCount || Infinity)) {
      setCount(newValue);
      if (onChange) onChange({ product, count: newValue });
    }
  };
  const decrement = () => {
    const newValue = count - 1;
    if (count - 1 >= 0) setCount(newValue);
    if (onChange && count - 1 >= 0) onChange({ product, count: newValue });
  };

  const reset = () => {
    setCount(initialValues?.count || value);
    
  }
  return {
    count,
    increment,
    decrement,
    reset,
    isMaxReached : count === initialValues?.maxCount
  };
};
