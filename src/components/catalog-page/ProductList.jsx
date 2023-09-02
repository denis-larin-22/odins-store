import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";
import { Select, SelectItem } from "@nextui-org/react";
import { motion } from "framer-motion";

export const ProductList = () => {
    const banner = getFromPublic(`/assets/main-page/new-products/product4.png`)

    const season = ["лето", "зима", "демисизон"];
    const gender = ["для него", "для неё", "подросток"];

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        },
    };

    const itemShow = {
        hidden: { y: 20, opacity: 0 },
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
            </div>

            <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2 }}
                // className="columns-1 md:columns-2 lg:columns-3"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                    <motion.li
                        key={index}
                        variants={itemShow}
                        transition={{
                            ease: "easeIn",
                            duration: 0.5,
                        }}
                    >
                        <ProductCard product={banner} />
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )
}