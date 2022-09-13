import { ReactElement } from 'react';

export interface Prop {
    product: Product,
    children?: ReactElement | ReactElement[]
};
export interface Product {
    id: string,
    title: string,
    img?: string
};
export interface ProductContexProps {
    counter: number;
    increasyBy: (value: number) => void;
    product: Product

}