import { getFromPublic } from "../../../_utils/getFromPublic"

export const Info = () => {
    const telephoneLogo = getFromPublic('/assets/common/telephone.png');
    const mailLogo = getFromPublic('/assets/common/mail.png');

    return (
        <section className="">
            <div className="py-[10px] bg-black">
                <div className="container flex items-center text-white gap-x-[40px]">
                    <h2 className="text-xxl-size uppercase">Оплата и доставка</h2>
                </div>
            </div>
            <ul className="container py-[45px] flex flex-col gap-y-[45px]">
                <li className="">
                    <h4 className="text-xxl-size circuit-text uppercase">покупка</h4>
                    <p className="text-xl-size pt-[20px]">Исследуйте весь наш сайт. Выбирайте понравившиеся товары.</p>
                </li>
                <li className="">
                    <h4 className="text-xxl-size circuit-text uppercase">Оплата</h4>
                    <p className="text-xl-size pt-[20px]">Произведите оплату на сайте удобным для вас способом.</p>
                </li>
                <li className="">
                    <h4 className="text-xxl-size circuit-text uppercase">доставка</h4>
                    <p className="text-xl-size pt-[20px]">Доставка из города Харьков по новой почте</p>
                </li>
            </ul>

            <div className="container text-xl-size">
                <div className="flex items-center gap-x-4 mb-[30px]">
                    <img src={telephoneLogo} alt="Telephone number" />
                    <a href="/" className="">+38 098 444 7777</a>
                </div>
                <div className="flex items-center gap-x-4">
                    <img src={mailLogo} alt="eMail" />
                    odins-store@gmail.com
                </div>
            </div>
        </section>
    )
}