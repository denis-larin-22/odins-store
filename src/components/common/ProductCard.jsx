import './styles/index.css';
import { Button, Card, CardHeader, Image, Link } from "@nextui-org/react";

export const ProductCard = ({ isNewSign = false, product }) => {

    return (
        <div className="py-[10px]">
            <Card className="product-card col-span-12 sm:col-span-4 w-full h-[400px]">
                {
                    isNewSign && <p className='circuit-text text-xl-size absolute top-2 right-2 z-10'>NEW</p>
                }
                <CardHeader className="card-options flex-col gap-y-[10px] !items-start card-options">
                    <p className="text-white/80 uppercase text-xl-size">Sizes: 41, 42, 43, 44</p>
                    <Button as={Link} href="/" className="text-md-size">More</Button>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={product}
                />
            </Card>
        </div >
    )
}