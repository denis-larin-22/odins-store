import './styles/index.css';
import { Link } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
    const townBcg = getFromPublic('/assets/common/town-bcg.png');
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');

    return (
        <footer className="">
            <div className="footer-bottom-shadow">
                <img src={townBcg} alt="town" className="relative -z-10 container" />
            </div>
            <div className="bg-black py-[40px]">
                <nav className="container grid grid-cols-1 sm:grid-cols-3 gap-4 text-mob-xl-size md:text-xl-size text-white">

                    <div className="">
                        <RouterLink to={"/catalog"} className="text-mob-xl-size md:text-xl-size circuit-text">
                            КАТАЛОГ
                        </RouterLink>
                        <ul className="mt-[20px] flex flex-col gap-y-[10px] sm:order-none">
                            <li className=""><a href="." className="">зимняя обувь</a></li>
                            <li className=""><a href="." className="">демисезонная обувь</a></li>
                            <li className=""><a href="." className="">для неё</a></li>
                            <li className=""><a href="." className="">для него</a></li>
                        </ul>
                    </div>

                    <div className="">
                        <RouterLink to={"/"} className="text-mob-xl-size md:text-xl-size circuit-text">
                            О НАС
                        </RouterLink>
                        <div className="mt-[20px] flex flex-col gap-y-[10px]">
                            <a href="/" className="">+38 098 444 7777</a>
                            <p className="">odins-store@gmail.com</p>
                            <Link href="#">
                                <img src={instagramLogoPath} alt="instagram" />
                            </Link>
                        </div>
                    </div>

                    <p>
                        LOGO
                    </p>
                </nav>
                <p className="text-gray-500 text-center">odins 2023</p>
            </div>

        </footer>
    )
}