import { useState } from "react";
import { Footer, Header, OdinsWord } from "../components/common";
import { AboutSection, Info, Main, NewProducts } from "../components/main-page";
import { motion, AnimatePresence } from "framer-motion";

export const MainPage = () => {
    const [isVisible, setIsVisible] = useState(sessionStorage.getItem('wasShown') || false);

    setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("wasShown", "true");
    }, 2000)

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
                <div className="min-h-screen bg-black flex items-center justify-center text-white">
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 2 }}
                        transition={{ ease: "easeInOut" }}
                    >
                        <OdinsWord />
                    </motion.span>
                </div>
            </AnimatePresence>
            }
        </>
    )
}