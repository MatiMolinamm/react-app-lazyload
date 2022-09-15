import { useState, useEffect, useRef } from 'react';
import { OnchangeArgs, Product } from '../interface/interfaces';

interface Props {
    product: Product;
    onChange?: (args: OnchangeArgs) => void,
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 }: Props) => {

    const [counter, setCounter] = useState(value)
    const isControled = useRef(!!onChange)
    console.log(`isControle ${!!onChange}`)

    const increaseBy = (value: number) => {
        if (isControled.current) {
            return onChange!({ count: value, product })
        }
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)
        onChange && onChange({ product, count: newValue })
    }
    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }

}