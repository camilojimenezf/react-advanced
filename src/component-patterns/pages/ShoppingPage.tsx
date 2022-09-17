import { ProductCard } from '../components/index'
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark"
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({ reset, count, increaseBy }) => (
                            <>
                                <ProductCard.Image className="custom-image" />
                                <ProductCard.Title className="text-white" />
                                <ProductCard.Buttons />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                <button onClick={() => increaseBy(2)}>+2</button>
                                <span>{count}</span>
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
