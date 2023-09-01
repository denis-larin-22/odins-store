import { Image } from "@nextui-org/react";
import { getFromPublic } from "../../../_utils/getFromPublic";

export const AboutSection = () => {
    const imagePath = getFromPublic('/assets/main-page/brand.png')

    return (
        <section className="container py-[40px] pt-[220px] sm:py-[100px] flex flex-col-reverse md:flex-row items-center md:items-end gap-[33px] md:gap-[100px]">
            <Image
                isZoomed
                alt="Image with Zoom"
                src={imagePath}
                classNames={{
                    zoomedWrapper: 'rounded-none',
                    img: 'rounded-none max-w-[375px]',
                }}
            />

            <div className="max-w-[560px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
                    <g clipPath="url(#clip0_8_191)">
                        <path d="M0.774902 70.3165H7.1499L36.6343 42.2347V3.91028H0.774902V70.3165ZM6.0874 9.22278H31.3218V39.9609L6.0874 63.9947V9.22278Z" fill="black" />
                        <path d="M43.7749 3.91028V70.3165H50.1499L79.6343 42.2347V3.91028H43.7749ZM74.3218 39.9609L49.0874 63.9947V9.22632H74.3218V39.9609Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_8_191">
                            <rect width="85" height="85" fill="white" transform="translate(0.774902 0.910278)" />
                        </clipPath>
                    </defs>
                </svg>
                <div className="text-mob-xl-size md:text-xl-size">
                    420 Four TwoO — бренд с духом уличной культуры, для людей, которые хотят жить в мире, узнавать разные культуры, быть свободными от предрассудков и носить то, что раскрывает их как личность и отражает их жизненные ценности.
                </div>
            </div>
        </section>
    )
}