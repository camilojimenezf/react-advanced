import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';

import { ProductContextProps, Product, onChangeProductArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
}

export const ProductCard = ({ product, children, className, style, onChange, value } : Props) => {
  const { counter, increaseBy } = useProduct({onChange, product, value});

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children}
        </div>
    </Provider>
  )
}
