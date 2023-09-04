import { Image } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
    const imagePath = getFromPublic('/assets/main-page/brand.png');
    const advantages = [
        "отличное качество",
        "приятный материал",
        "доставка по всей Украине"
    ]
    //Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = (x) => ({
        transform: isInView ? "none" : `translateX(${x})`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s easeInOut"
    })


    return (
        <section className="relative container py-[40px] pt-[70px] flex flex-col md:flex-row">
            <motion.ul
                initial={{ opacity: 0, y: "100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "backInOut", duration: 0.8 }}
                className="w-full md:w-fit absolute top-[-120px] right-0 p-[20px] lg:p-[50px] bg-black max-w-[450px] flex flex-col gap-[25px] text-medium sm:text-md-size leading-normal"
            >
                {advantages.map((text, index) => (
                    <li key={index} className="flex items-center gap-[12px] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="29" viewBox="0 0 16 29" fill="none">
                            <path d="M0.664062 0.677673V28.3275H3.31845L15.595 16.635V0.677673H0.664062ZM13.383 15.6882L2.87605 25.6953V2.89114H13.383V15.6882Z" fill="white" />
                        </svg>
                        <p className="">{text}</p>
                    </li>
                ))}
            </motion.ul>

            <div className="flex flex-col-reverse md:flex-row items-center md:items-end gap-[33px] md:gap-[80px] overflow-hidden">
                <motion.div style={getInView("-200px")}>
                    <Image
                        isZoomed
                        alt="Image with Zoom"
                        src={imagePath}
                        classNames={{
                            zoomedWrapper: 'rounded-none',
                            img: 'rounded-none max-w-[375px]',
                        }}
                    />
                </motion.div>

                <motion.div ref={ref} className="max-w-[560px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                        <g clipPath="url(#clip0_8_191)">
                            <path d="M0.774902 70.3165H7.1499L36.6343 42.2347V3.91028H0.774902V70.3165ZM6.0874 9.22278H31.3218V39.9609L6.0874 63.9947V9.22278Z" fill="black" />
                            <path d="M43.7749 3.91028V70.3165H50.1499L79.6343 42.2347V3.91028H43.7749ZM74.3218 39.9609L49.0874 63.9947V9.22632H74.3218V39.9609Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_191">
                                <rect width="85" height="85" fill="white" transform="translate(0.774902 0.910278)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <motion.div style={getInView("200px")} className="text-mob-xl-size md:text-xl-size">
                        420 Four TwoO — бренд с духом уличной культуры, для людей, которые хотят жить в мире, узнавать разные культуры, быть свободными от предрассудков и носить то, что раскрывает их как личность и отражает их жизненные ценности.
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}