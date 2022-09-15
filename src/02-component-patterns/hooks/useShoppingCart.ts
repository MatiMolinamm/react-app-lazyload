import { Product } from '../interface/interfaces';
import { useState } from 'react';

export const useShoppingCart = () => {
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
    return ({ onProductCountChange, shoppingCart }
    )
}
