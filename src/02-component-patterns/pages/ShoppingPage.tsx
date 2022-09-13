import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../style/custom-style.css'
const product = {
    id: 'string',
    title: 'Name Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={"hola mundo!!!!!!"} />
                    <ProductButtons />
                </ProductCard>
                <ProductCard product={product} className='bg-dark'>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-white' />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
