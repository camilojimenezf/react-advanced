import { ProductCard } from '../components/index'
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png',
}

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
                <ProductCard product={product} className="bg-dark">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product} style={{
                    backgroundColor: '#70D1F8',
                }}>
                    <ProductCard.Image />
                    <ProductCard.Title style={{
                        fontWeight: 'bold',
                    }} />
                    <ProductCard.Buttons style={{
                        display: 'flex',
                        justifyContent: 'end',
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
