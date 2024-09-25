import React from "react";

import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

  interface ProductTitleProps {
    className?: string;
    text?: boolean;
    style?: React.CSSProperties;
  }

  export const ProductTitle = ({className, text = true, style} : ProductTitleProps) => {
  /* Aqui estamos accediendo a los valores que esta recibiendo del provider */
    const {product} = useContext(ProductContext);
    const {title, description} = product;

    return (
      <>
        <h3 className={`${className}`} style={style}>{title}</h3>
  
        {description && text && (
          <span className={`${styles.productDescription} ${className}`}>
            {description}
          </span>
        )}
      </>
    );
  };