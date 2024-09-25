import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";
import React from "react";

interface Props {
  className?: string;
}

  export const ProductButtons = ({className} : Props) => {
    /* Aqui estamos accediendo a los valores que esta recibiendo del provider */
    const {count, decrement, increment, isMaxReached} = useContext(ProductContext);


    return (
      <div className={`${styles.buttonsContainer}`}>
        <button className={`${styles.buttonMinus} ${className}`} onClick={decrement}>
          -
        </button>
  
        <div className={`${styles.countLabel} ${className}`}>{count}</div>
  
        <button className={`${styles.buttonAdd} ${isMaxReached && styles.disabled } ${className}`} onClick={increment}>
          +
        </button>
      </div>
    );
  };