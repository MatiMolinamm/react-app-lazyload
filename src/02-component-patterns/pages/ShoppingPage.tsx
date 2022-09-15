import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interface/interfaces';
import '../styles/custom-styles.css';
import { useEffect, useState } from 'react';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
    count: 0
};
const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png',
    count: 0
}
const products: Product[] = [product1, product2]

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: Product }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart //desestructura el objeto; y devuelve el resto;

                return rest
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {products.map(product => {
                    return (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title className="text-bold" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>)
                })}
            </div>
            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([key, product]) => {  //MAPEA UN OBJETO 

                    return (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={(e) => onProductCountChange(e)}
                            value={product.count}>
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>)
                })}
            </div>

        </div>
    )
}
