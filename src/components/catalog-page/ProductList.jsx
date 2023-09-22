import { ProductCard } from "../common";
import { motion } from "framer-motion";

export const ProductList = ({ catalog }) => {
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

    if (catalog === null) return null;

    return (
        <section className="container">
            {(catalog.length) ?
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="pb-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px]"
                >
                    {catalog.map((product) => (
                        <motion.li
                            key={product.id}
                            variants={itemShow}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                        >
                            <ProductCard product={product} />
                        </motion.li>
                    ))}
                </motion.ul>
                :
                <>
                    <p className="text-center my-[40px]">На жаль, нічого не знайдено</p>
                </>
            }
        </section >
    )
}


