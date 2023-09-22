import './styles/index.css';
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { setActiveProductAction } from '../../core/store';

const ProductCardView = ({ product, setActiveProduct }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // To scrol page up
    }, []);

    return (
        <Card className="product-card col-span-12 sm:col-span-4 w-full h-[250px] md:h-[400px]">
            {
                product.newProduct && <p className='circuit-text text-xl-size absolute top-2 right-2 z-10'>NEW</p>
            }
            <CardHeader className="p-[20px] card-options h-[60%] text-white/70">
                <div className="card-options-content text-xl-size ">
                    <p className='font-sans uppercase text-mob-xl-size md:text-xl-size'>{product.name}</p>
                    <div className=" text-small md:text-medium">
                        <p>Розміри: {product.sizes}</p>
                        <p>Сезон: {product.season === 'winter' ? 'зима' : product.season === 'summer' ? 'літо' : 'весна/осінь'}</p>
                    </div>
                    <Button as={RouterLink} onClick={() => setActiveProduct(product)} to={"/product"} className="self-end text-small md:text-medium">дивитися</Button>
                </div>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={product.images[0]}
            />
        </Card>
    )
}

const mapDispatch = (dispatch) => ({
    setActiveProduct: (product) => dispatch(setActiveProductAction(product)),
});

export const ProductCard = connect(null, mapDispatch)(ProductCardView);