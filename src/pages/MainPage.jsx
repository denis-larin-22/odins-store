import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer, Header, OdinsWord } from "../components/common";
import { AboutSection, Info, Main, NewProducts } from "../components/main-page";

export const MainPage = () => {
    // Turnes off startup screen
    const wasShown = sessionStorage.getItem('wasShown') || false;
    const [isVisible, setIsVisible] = useState(wasShown);

    setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("wasShown", "true");
    }, 3000)

    return (
        <>
            {/* Main page */}
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

            {/* Startup screen */}
            {!isVisible && <AnimatePresence>
                <div className="min-h-screen overflow-hidden bg-black flex items-center justify-center text-white">
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