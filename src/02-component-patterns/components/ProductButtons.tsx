import { useContext } from 'react';
import { ProductContex } from './ProductCard';
import styles from '../style/styles.module.css'

export const ProductButtons = () => {
    const { increasyBy, counter } = useContext(ProductContex)
    return (
        <>
            <div className={styles.buttonsContainer}>
                <button onClick={() => increasyBy(-1)} className={styles.buttonMinus}>-</button>
                <div className={styles.countLabel}>{counter}</div>
                <button onClick={() => increasyBy(1)} className={styles.buttonAdd}>+</button>
            </div>
        </>
    )
}