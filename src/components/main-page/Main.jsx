import './styles/index.css';
import { getFromPublic } from "../../_utils/getFromPublic";
import { OdinsLogo } from "../common";
import { motion } from 'framer-motion';

export const Main = () => {
    const mainBcgPath = getFromPublic('/assets/main-page/main-bcg.jpg');

    return (
        <div className="relative h-screen main-top-shadow overflow-hidden">
            <img src={mainBcgPath} alt="main-bcg" className="absolute top-0 -z-10 w-full h-full object-cover" />
            <main className="h-full container flex flex-col items-center">
                <div className="h-full flex flex-col items-center justify-center">
                    <OdinsLogo />
                    <motion.h1
                        className="text-mob-xxl-size tracking-widest md:text-xxl-size uppercase store-name-text"
                        initial={{ opacity: 0, y: "50px" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ease: "backInOut", duration: 1.5 }}
                    >
                        Odin`s shoes
                    </motion.h1>
                    {/* <p className="text-md-size text-center lowercase">Дизайнерская одежда, вдохновлённая уличной культурой</p> */}
                </div>
            </main>

        </div >
    )
} 