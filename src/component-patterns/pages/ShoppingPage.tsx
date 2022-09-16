import { ProductCard } from '../components/index'
import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';



export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange}
                            value={product.count}
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
                            value={shoppingCart[product.id] ? shoppingCart[product.id].count : 0}
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
