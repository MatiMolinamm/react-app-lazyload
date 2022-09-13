import styles from '../style/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContexProps, Product } from '../interface/interfaces';

export const ProductContex = createContext({} as ProductContexProps)
const { Provider } = ProductContex

export interface Prop {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string;
};

export const ProductCard = ({ product, children, className }: Prop) => {
    const { counter, increasyBy } = useProduct();
    return (
        <Provider value={{
            counter,
            increasyBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}


