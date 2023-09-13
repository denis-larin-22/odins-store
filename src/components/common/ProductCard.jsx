import './styles/index.css';
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { setActiveProductAction } from '../../core/store';

const ProductCardView = ({ product, setActive }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // To scrol page up
    }, []);

    return (
        <div className="py-[10px]">
            <Card className="product-card col-span-12 sm:col-span-4 w-full h-[200px] md:h-[400px]">
                {
                    product.newProduct && <p className='circuit-text text-xl-size absolute top-2 right-2 z-10'>NEW</p>
                }
                <CardHeader className="card-options flex-col gap-y-[10px] !items-start card-options">
                    <p className="text-white/80 uppercase text-xl-size">{product.name}</p>
                    <p className="text-white/80 uppercase text-xl-size"> {product.prise}</p>
                    <Button as={RouterLink} onClick={() => setActive(product)} to={"/product"} className="text-md-size">More</Button>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={product.images[0]}
                />
            </Card>
        </div >
    )
}

const mapDispatch = (dispatch) => ({
    setActive: (product) => dispatch(setActiveProductAction(product)),
})

export const ProductCard = connect(null, mapDispatch)(ProductCardView)