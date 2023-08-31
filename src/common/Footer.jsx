import { Link } from "@nextui-org/react"
import { getFromPublic } from "../_utils/getFromPublic"

export const Footer = () => {
    const townBcg = getFromPublic('/assets/common/town-bcg.png');
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');

    return (
        <footer className="">
            <div className="footer-bottom-shadow">
                <img src={townBcg} alt="town" className="relative -z-10 container" />
            </div>
            <div className="bg-black py-[40px]">
                <nav className="container flex justify-between items-start text-xl-size text-white">
                    <div className=" ">
                        <Link href="#" className="text-xl-size footer-circuit-text">
                            КАТАЛОГ
                        </Link>
                        <ul className="mt-[20px] flex flex-col gap-y-[10px]">
                            <li className=""><a href="." className="">зимняя обувь</a></li>
                            <li className=""><a href="." className="">демисезонная обувь</a></li>
                            <li className=""><a href="." className="">для неё</a></li>
                            <li className=""><a href="." className="">для него</a></li>
                        </ul>
                    </div>

                    <div className="">
                        <Link href="#" className="text-xl-size footer-circuit-text">
                            О НАС
                        </Link>
                        <div className="mt-[20px] flex flex-col gap-y-[10px]">
                            <a href="/" className="">+38 098 444 7777</a>
                            <p className="">odins-store@gmail.com</p>
                        </div>
                    </div>

                    <p>
                        LOGO
                    </p>

                    <Link href="#" className="text-xl-size footer-circuit-text">
                        <img src={instagramLogoPath} alt="instagram" />
                    </Link>
                </nav>
                <p className="text-gray-500 text-center">odins 2023</p>
            </div>

        </footer>
    )
}