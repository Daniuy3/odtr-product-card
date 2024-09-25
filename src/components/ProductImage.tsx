import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import React from "react";

interface Props {
    className?: string;
    style?: React.CSSProperties;
}
  export const ProductImage = ({className, style} : Props) => {
        /* Aqui estamos accediendo a los valores que esta recibiendo del provider */
    const {product} = useContext(ProductContext);
    const {img: image} = product;
    
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={image ? image : noImage}
        alt="Product Image"
        style={style}
      />
    );
  };