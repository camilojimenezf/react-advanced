import { useState } from 'react';
import { onChangeProductArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeProductArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
      const newValue = Math.max(counter + value, 0);
  
      setCounter(newValue);

      onChange && onChange({ product, count: newValue });
    }
  
    return {
        counter,
        increaseBy
    }
}