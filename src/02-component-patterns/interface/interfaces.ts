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