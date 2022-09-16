import { useState } from "react";
import { Product } from "../interfaces/interfaces";

interface ProductInCart extends Product {
    count: number;
}

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string] : ProductInCart}>({});

    const onProductCountChange = ({product, count}: { product: Product; count: number }) => {
        const productInCart: ProductInCart = shoppingCart[product.id] || {...product, count: 0};

        if (Math.max(productInCart.count + count, 0) > 0) {
            productInCart.count += count;
            setShoppingCart({
                ...shoppingCart,
                [product.id]: productInCart
            });
            return;
        }

        const currentShoppingCart = shoppingCart;
        delete currentShoppingCart[product.id];

        setShoppingCart({
            ...currentShoppingCart
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}