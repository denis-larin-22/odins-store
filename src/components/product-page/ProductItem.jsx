import { Carousel } from "react-carousel-minimal";
import { Contacts, FavoritesLogo } from "../common";
import { Button, Tooltip } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";

export const ProductItem = ({ activeProduct, addFavoriteHandler, favoriteBtnToggler }) => {
    const { name, images, info, price, oldPrice, season, sizes } = activeProduct;

    // The Carousel accepts an array of objects where each object must have two properties: {image: url, caption: text}
    const imgUrls = () => {
        const pathes = images.map(url => ({ image: url }));
        return pathes;
    }

    const btnHandler = () => {
        addFavoriteHandler(activeProduct);
    }

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: '100%' },
    }

    return (
        <div className="container py-[20px] sm:pb-[50px] flex flex-col md:flex-row gap-0 sm:gap-[70px] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Carousel
                    data={imgUrls()}
                    width="600px"
                    height="640px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "600px",
                        maxHeight: "700px",
                    }}
                />
            </motion.div>

            <div className="flex flex-col justify-between pt-[60px]">
                <article className="relative flex flex-col gap-y-[28px] text-mob-md-size md:text-md-size">
                    <div className="absolute top-0 right-0 z-10">
                        {
                            !favoriteBtnToggler ?
                                <Tooltip content="Додати до обраних" placement="left" color="default">
                                    <Button variant="light" className="pointer" onClick={btnHandler}>
                                        <FavoritesLogo color="black" />
                                    </Button>
                                </Tooltip>
                                :
                                <Tooltip content="Додано в обрані" placement="left" color="danger">
                                    <Button variant="light" color="danger" disabled>
                                        <FavoritesLogo color="red" />
                                    </Button>
                                </Tooltip>
                        }
                    </div>

                    <motion.h4
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="text-xl-size md:text-xl-size text-gray-500"
                    >
                        Модель: <span className="font-sans text-black">{name}</span>
                    </motion.h4>
                    <Tooltip showArrow placement="bottom" size="md" color="primary" content="Деталі по замовленню уточнюйте за телефоном">
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-gray-500">Розміри:</span> {sizes}
                        </motion.p>
                    </Tooltip>
                    <motion.p
                        className="max-w-[500px]"
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 0.5 }}
                    >
                        {info}
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ delay: 0.7 }}
                    >
                        Сезон: {season === 'winter' ? 'зима' : season === 'summer' ? 'літо' : 'весна/осінь'}
                    </motion.p>
                    {(price === null) ? null : <h5 className="self-end">{price} грн.  <span className="text-gray-500 line-through">{oldPrice} грн.</span></h5>}
                </article>

                <motion.span
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-end mt-[30px] md:mt-0">
                    <Contacts emailView={false} />
                </motion.span>
            </div >
        </div >
    )
}