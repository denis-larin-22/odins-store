import './index.css';
import { useState } from "react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export const Header = () => {
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" className="header bg-black py-[20px] text-white">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">ODIN`S</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-5 md:gap-[120px]" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#" className='uppercase'>
                        главная
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page" className='uppercase'>
                        каталог
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#" className='uppercase'>
                        о нас
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href=''>
                        <img src={instagramLogoPath} alt="instagram" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='h-full pt-[60px] flex flex-col gap-y-[30px]'>
                <NavbarMenuItem>
                    <Link className="w-full text-xl-size uppercase" href="#" size="lg">главная</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full text-xl-size uppercase" href="#" size="lg">каталог</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className="w-full text-xl-size uppercase" href="#" size="lg">о нас</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='mt-[200px] text-center'>
                    <p className="font-bold text-inherit">LOGO</p>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );

}
