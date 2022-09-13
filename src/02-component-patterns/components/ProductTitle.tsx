import { useContext } from 'react';
import { ProductContex } from './ProductCard';
import styles from '../style/styles.module.css'
interface Props {
    title?: string,
    className?: string
}
export const ProductTitle = ({ title, className }: Props) => {
    const { product } = useContext(ProductContex)
    return (
        <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
    )
};