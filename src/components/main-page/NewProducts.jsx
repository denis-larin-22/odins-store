import { Button } from "@nextui-org/react";
import { getFromPublic } from "../../_utils/getFromPublic";
import { ProductCard } from "../common";


export const NewProducts = () => {
    const COUNT_PRODUCTS = 6;
    const imgNewSignPath = getFromPublic('/assets/common/new-sign.svg');
    const banner = getFromPublic(`/assets/main-page/new-products/product7.png`);

    const getProductImgPathes = () => {
        const pathes = [];

        for (let i = 0; i < COUNT_PRODUCTS; i++) {
            const newPath = getFromPublic(`/assets/main-page/new-products/product${i + 1}.png`)
            pathes.push(newPath);
        }

        return pathes;
    }

    const imgProductPathes = getProductImgPathes();

    return (
        <>
            <div className="py-[10px] bg-black">
                <div className="container flex flex-wrap items-center justify-center sm:justify-start text-white gap-x-[40px]">
                    <h2 className="text-mob-xxl-size md:text-xxl-size uppercase">Новинки</h2>
                    <img src={imgNewSignPath} alt="NEW" className="w-[58px] md:w-fit" />
                </div>
            </div>
            <section className="container py-[60px]">
                <ul className="columns-1 md:columns-2 gap-x-[40px]">
                    {imgProductPathes.map((path, index) => (
                        <li key={index} className="">
                            <ProductCard height="500px" product={path} isNewSign={true} />
                        </li>
                    ))}
                </ul>

                <div className="relative">
                    <img src={banner} alt="Banner" className="max-h-[724px] max-w-[1440px] w-full object-cover rounded-md" />
                    <div className="text-xl-size absolute top-[50%] right-1">
                        <h5 className="">Trade name</h5>
                        <div className="flex items-center pt-[34px] gap-8">
                            <Button className="py-[12px] px-[47px] border-2 border-black rounded-none bg-transparent">Подробнее</Button>
                            <p className="flex flex-col"><span className="line-through text-gray-500">1200 грн.</span>950 грн.</p>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}