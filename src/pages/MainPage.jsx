import { useState } from "react";
import { Footer, Header, OdinsWord } from "../components/common";
import { AboutSection, Info, Main, NewProducts } from "../components/main-page";
import { motion, AnimatePresence } from "framer-motion";

export const MainPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    setTimeout(() => {
        setIsVisible(true);
    }, 1200)

    return (
        <>
            {isVisible &&
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Header />
                        <Main />
                        <AboutSection />
                        <NewProducts />
                        <Info />
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            }
            {!isVisible && <AnimatePresence>
                <div className="min-h-screen bg-black">
                    <header className="w-[1488px] mx-auto py-[27px] md:py-[20px] pl-[7px] ">
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: "-100px" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                            className="w-full pl-[50px] md:pl-0"
                        >
                            <OdinsWord />
                        </motion.div>
                    </header>
                </div>
            </AnimatePresence>
            }
        </>
    )
}