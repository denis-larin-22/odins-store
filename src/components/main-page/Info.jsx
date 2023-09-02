import { getFromPublic } from "../../_utils/getFromPublic";

export const Info = () => {
    const telephoneLogo = getFromPublic('/assets/common/telephone.png');
    const mailLogo = getFromPublic('/assets/common/mail.png');
    const hStyles = 'text-mob-xxl-size sm:text-xxl-size circuit-text uppercase';
    const pStyles = 'text-mob-xl-size sm:text-xl-size pt-[10px] sm:pt-[20px]'

    return (
        <section className="">
            <div className="py-[10px] bg-black">
                <div className="container flex items-center text-white gap-x-[40px]">
                    <h2 className="text-mob-xxl-size md:text-xxl-size uppercase">Оплата и доставка</h2>
                </div>
            </div>
            <ul className="container py-[45px] flex flex-col gap-y-[30px] sm:gap-y-[45px]">
                <li className="">
                    <h4 className={hStyles}>покупка</h4>
                    <p className={pStyles}>Исследуйте весь наш сайт. Выбирайте понравившиеся товары.</p>
                </li>
                <li className="">
                    <h4 className={hStyles}>Оплата</h4>
                    <p className={pStyles}>Произведите оплату на сайте удобным для вас способом.</p>
                </li>
                <li className="">
                    <h4 className={hStyles}>доставка</h4>
                    <p className={pStyles}>Доставка из города Харьков по новой почте</p>
                </li>
            </ul>

            <div className="container text-xl-size">
                <div className="flex flex-wrap items-center gap-x-4 mb-[30px]">
                    <img src={telephoneLogo} alt="Telephone number" />
                    <a href="/" className={pStyles}>+38 098 444 7777</a>
                </div>
                <div className={`flex flex-wrap items-center gap-x-4 ${pStyles}`}>
                    <img src={mailLogo} alt="eMail" />
                    odins-store@gmail.com
                </div>
            </div>
        </section>
    )
}