import { useRef } from "react";
import { Contacts } from "../common";
import { useInView } from "framer-motion";

export const Info = () => {
    const hStyles = 'text-mob-xxl-size sm:text-xxl-size circuit-text uppercase';
    const pStyles = 'text-mob-xl-size sm:text-xl-size pt-[10px] sm:pt-[20px]';

    // Animation
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const getInView = (y) => ({
        transform: isInView ? "none" : `translateY(${y})`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    })

    return (
        <section className="">
            <div className="py-[10px] bg-black">
                <div className="container flex items-center text-white gap-x-[40px]">
                    <h2 className="text-mob-xxl-size md:text-xxl-size uppercase">Оплата и доставка</h2>
                </div>
            </div>
            <ul ref={ref} className="container py-[45px] flex flex-col gap-y-[30px] sm:gap-y-[45px]">
                <li className="" style={getInView("100px")}>
                    <h4 className={hStyles}>покупка</h4>
                    <p className={pStyles}>Исследуйте весь наш сайт. Выбирайте понравившиеся товары.</p>
                </li>
                <li className="" style={getInView("100px")}>
                    <h4 className={hStyles}>Оплата</h4>
                    <p className={pStyles}>Произведите оплату на сайте удобным для вас способом.</p>
                </li>
                <li className="" style={getInView("100px")}>
                    <h4 className={hStyles}>доставка</h4>
                    <p className={pStyles}>Доставка из города Харьков по новой почте</p>
                </li>
                <li style={getInView("100px")} className="">
                    <Contacts />
                </li>
            </ul>

        </section>
    )
}