import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';

import { ProductContextProps, Product, onChangeProductArgs, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeProductArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues } : Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({onChange, product, value, initialValues});

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount,
    }}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
            {children({
              count: counter,
              isMaxCountReached,
              reset,
              increaseBy,
              product,
            })}
        </div>
    </Provider>
  )
}
