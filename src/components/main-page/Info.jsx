import { useRef } from "react";
import { Contacts } from "../common";
import { motion, useInView } from "framer-motion";

export const Info = () => {
    const hStyles = 'text-mob-xl-size sm:text-xl-size circuit-text uppercase';
    const pStyles = 'text-mob-md-size sm:text-md-size pt-[10px] sm:pt-[20px]';

    // Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = () => ({
        transform: isInView ? "none" : `translateX(-200px)`,
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease 0.5s"
    })

    return (
        <section>
            <div className="py-[10px] bg-black">
                <div className="container text-center md:text-start text-white gap-x-[40px]">
                    <h2 className="text-mob-xxl-size md:text-xxl-size uppercase">замовлення</h2>
                </div>
            </div>
            <ul ref={ref} className="container py-[45px] flex flex-col gap-y-[30px] sm:gap-y-[45px]">
                <motion.li className="" style={getInView()}>
                    <h4 className={hStyles}>Формування заказу</h4>
                    <p className={pStyles}>Досліджуйте наш каталог на сайті. Обирайте моделі, що сподобалися, додавайте до списку обраних і залишайте замовлення на сайті або замовлюйте по телефону. Наявність товару або термін виконання замовлення уточнюйте за телефоном.</p>
                </motion.li>
                <motion.li className="" style={getInView()}>
                    <h4 className={hStyles}>оплата</h4>
                    <p className={pStyles}>Оплата здійснюється на карту.</p>
                </motion.li>
                <motion.li className="" style={getInView()}>
                    <h4 className={hStyles}>доставка</h4>
                    <p className={pStyles}>Доставка здійснюється по всій Україні з міста Харків новою поштою.</p>
                </motion.li>
                <motion.li style={getInView()} className="">
                    <Contacts />
                    <p className={pStyles}>Чекаємо на ваші замовлення! Ваш - Odin`s Shoes.</p>
                </motion.li>
            </ul>

        </section>
    )
}