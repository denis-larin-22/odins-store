import './styles/index.css';
import { Link } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { Link as RouterLink } from 'react-router-dom';
import { FavoritesLogo } from './FavoritesLogo';

export const Footer = () => {
    const townBcg = getFromPublic('/assets/common/town-bcg.png');
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');
    const odinsLogoPath = getFromPublic('/assets/common/odin`s-logo-white.svg');

    return (
        <footer>
            <div className="footer-bottom-shadow">
                <img src={townBcg} alt="town" className="relative -z-10 container" />
            </div>
            <div className="bg-black py-[10px]">
                <div className="container flex items-start md:items-center justify-between text-gray-400 text-large">
                    <nav className="flex flex-col">
                        <RouterLink to={"/"} className='hover:text-white'>
                            головна
                        </RouterLink>
                        <RouterLink to={"/catalog"} className='hover:text-white'>
                            каталог
                        </RouterLink>
                        <RouterLink to={"/"} className='hover:text-white'>
                            про нас
                        </RouterLink>
                    </nav>
                    <div>
                        <img src={odinsLogoPath} alt="ODIN`S" className='bg-white w-[100px]' />
                        <p className="text-gray-500 text-center">odins 2023</p>
                    </div>
                    <div className="mt-[20px] flex items-center gap-5 text-mob-xl-size md:text-xl-size">
                        <RouterLink to={"/favorites"}>
                            <FavoritesLogo />
                        </RouterLink>
                        <Link href="#">
                            <img src={instagramLogoPath} alt="instagram" />
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}