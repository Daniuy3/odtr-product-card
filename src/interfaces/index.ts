export interface Product {
    id: string;
    title: string;
    img?: string;
    description?: string;
}
export interface ProductInCart extends Product {
    count: number;
  } 
/* Los datos que el provider dara a sus hijos */  
export interface ProductContextInterface {
    count: number;
    product: Product;
    maxCount: number;
    isMaxReached: boolean;
    
    increment: () => void;
    decrement: () => void;
}
/* El onChange referido al useProduct */
export interface onChangeProps {
    product : Product;
    count: number;
}
export type onChange = ({product, count} : onChangeProps) => void;

export type InitialValues = {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHndlers {
    count: number;
    isMaxReached: boolean;
    maxCount?: number;
    product: Product;

    increment: () => void;  
    decrement: () => void; 
    reset : () => void;
}