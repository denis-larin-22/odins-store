import { getFromPublic } from "../../_utils";

export const SidePanel = () => {
    const instagramLogoPath = getFromPublic('/assets/common/instagram-logo.svg');

    return (
        <aside className="">
            <nav className="">
                {
                    [1, 2, 3].map(item => (
                        <a href="/" className="">
                            <img src="" alt="" />
                        </a>
                    ))
                }
            </nav>
        </aside>
    )
}