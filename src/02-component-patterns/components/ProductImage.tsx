import { useContext } from 'react';
import { ProductContex } from './ProductCard';
import noImg from '../assets/no-image.jpg'
import styles from '../style/styles.module.css'

export const ProductImage = (className: { className?: string }) => {
    const { product } = useContext(ProductContex)
    return (
        <img className={` ${styles.productImg} ${className.className}`} src={product.img ? product.img : noImg} alt='imagen' />
    )
};