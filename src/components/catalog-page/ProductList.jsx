import { ProductCard } from "../common";
import { motion } from "framer-motion";
import { Filters } from "./Filters";
import { Spinner } from "@nextui-org/react";

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

    if (catalog === null) return <section className="container">
        <Filters />
        <div className="min-h-[50vh] flex items-center justify-center">
            <Spinner size="lg" />
        </div>
    </section>

    return (
        <section className="container">
            <Filters />

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
                    <p className="text-center my-[30vh]">На жаль, нічого не знайдено</p>
                </>
            }
        </section >
    )
}


