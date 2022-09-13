import { useContext } from 'react';
import { ProductContex } from './ProductCard';
import styles from '../style/styles.module.css'

export const ProductTitle = (title: { title?: string }) => {
    const { product } = useContext(ProductContex)
    return (
        <span className={styles.productDescription}>{title.title ? title.title : product.title}</span>
    )
};