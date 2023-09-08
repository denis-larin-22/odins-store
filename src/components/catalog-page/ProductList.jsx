import { useState } from "react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";
import { Button, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

export const ProductList = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product4.png`);
    const columnIcon = getFromPublic(`/assets/common/column.svg`);
    const rowIcon = getFromPublic(`/assets/common/row.svg`);


    const season = ["лето", "зима", "демисизон"];
    const gender = ["для него", "для неё", "подросток"];

    const [isRow, setIsRow] = useState(false);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.1
            }
        },
    };

    const itemShow = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
    };


    return (
        <section className="container">
            <div className="pt-[20px] flex flex-col sm:flex-row max-w-lg gap-4">
                <Select
                    size="lg"
                    label="Сезон"
                    className="w-full"
                >
                    {season.map((season, index) => (
                        <SelectItem key={index + gender} value={season}>
                            {season}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    size="lg"
                    label="Для кого"
                    className="w-full"
                >
                    {gender.map((gender, index) => (
                        <SelectItem key={index + gender} value={gender}>
                            {gender}
                        </SelectItem>
                    ))}
                </Select>
                <Tooltip content="cards direction" color="primary">
                    <Button
                        variant="bordered"
                        className="hidden md:block m-auto"
                        onClick={() => setIsRow(!isRow)}
                    >
                        {isRow ? <img className="w-[30px] m-auto" src={columnIcon} alt="column" /> : <img className="w-[30px] m-auto" src={rowIcon} alt="row" />}
                    </Button>
                </Tooltip>
            </div>

            <motion.ul
                layout
                variants={container}
                initial="hidden"
                animate="visible"
                className={`grid grid-cols-1 ${isRow ? 'md:grid-cols-1 lg:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]`}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <motion.li
                        layout
                        key={index}
                        variants={itemShow}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.5,
                        }}
                    >
                        <ProductCard product={banner} />
                    </motion.li>
                ))}
            </motion.ul>
        </section >
    )
}