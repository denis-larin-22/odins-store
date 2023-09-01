import '../index.css';
import { Card, CardHeader, Image } from "@nextui-org/react"

export const NewProductCard = ({ imgPath }) => {
    return (
        <Card className="col-span-12 sm:col-span-4 w-full h-[300px] mb-[35px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase text-xl-size">What to watch</p>
                <h4 className="text-white font-medium text-xl-size">Stream the Acme event</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={imgPath}
            />
        </Card>
    )
}