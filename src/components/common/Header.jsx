import './styles/index.css';
import { useState } from "react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { OdinsWord } from './OdinsWord';
import { Link as RouterLink } from 'react-router-dom';
import { OdinsLogo } from './OdinsLogo';
import { FavoritesLogo } from './FavoritesLogo';

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
                    <OdinsWord />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-5 md:gap-[100px]" justify="center">
                <NavbarItem>
                    <RouterLink to={"/"} color="foreground" className='text-header-link uppercase'>
                        главная
                    </RouterLink>
                </NavbarItem>
                <NavbarItem isActive>
                    <RouterLink to={"/catalog"} aria-current="page" className='text-header-link uppercase'>
                        каталог
                    </RouterLink>
                </NavbarItem>
                <NavbarItem>
                    <RouterLink to={"/"} color="foreground" className='text-header-link uppercase'>
                        о нас
                    </RouterLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className='flex gap-3'>
                    <RouterLink to={"/favorites"}>
                        <FavoritesLogo />
                    </RouterLink>
                    <Link href=''>
                        <img src={instagramLogoPath} alt="instagram" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='h-full pt-[60px] flex flex-col gap-y-[30px]'>
                <NavbarMenuItem>
                    <RouterLink to={"/"} className="w-full text-xl-size uppercase" size="lg">главная</RouterLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <RouterLink to={"/catalog"} className="w-full text-xl-size uppercase" size="lg">каталог</RouterLink>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <RouterLink to={"/"} className="w-full text-xl-size uppercase" size="lg">о нас</RouterLink>
                </NavbarMenuItem>
                <NavbarMenuItem className=' h-full flex items-center justify-center'>
                    <OdinsLogo />
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );

}
