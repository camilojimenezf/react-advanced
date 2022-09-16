import { ProductCard } from '../components/index'
import '../styles/custom-styles.css';
import { useState } from 'react';
import { Product } from '../interfaces/interfaces';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
}

const product2 = {
    id: '2',
    title: 'Coffee Mug Meme',
    img: './coffee-mug2.png',
}

const products = [product, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string] : ProductInCart}>({});

    const onProductCountChange = ({product, count}: { product: Product; count: number }) => {
        if (count === 0) {
            const currentShoppingCart = shoppingCart;
            delete currentShoppingCart[product.id];

            setShoppingCart({
                ...currentShoppingCart
            });
        } else {
            setShoppingCart({
                ...shoppingCart,
                [product.id]: {
                    ...product,
                    count,
                }
            });
        }
    };

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div className="shopping-cart">
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons />
                        </ProductCard>
                    ))
                }
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark"
                            onChange={onProductCountChange}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title className="text-white" />
                            <ProductCard.Buttons />
                        </ProductCard>
                    ))
                }
            </div>
            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>
        </div>
    )
}
