import styles from '../style/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContexProps, Prop } from '../interface/interfaces';

export const ProductContex = createContext({} as ProductContexProps)
const { Provider } = ProductContex

export const ProductCard = ({ product, children }: Prop) => {
    const { counter, increasyBy } = useProduct();
    return (
        <Provider value={{
            counter,
            increasyBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}


