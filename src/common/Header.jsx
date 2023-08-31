import './index.css';
import { useState } from "react";
import { getFromPublic } from "../_utils/getFromPublic";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";

export const Header = () => {
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (

        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} maxWidth='full' className="bg-transparent header">
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    LOGO
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem>
                    <Link href="#">
                        ГЛАВНАЯ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        КАТАЛОГ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        О НАС
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link href="#">
                        <img src={instagramLogoPath} alt="instagram" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className='bg-transparent'>
                <NavbarItem>
                    <Link href="#">
                        ГЛАВНАЯ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        КАТАЛОГ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#">
                        О НАС
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
