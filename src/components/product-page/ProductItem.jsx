import { Carousel } from "react-carousel-minimal"
import { getFromPublic } from "../../_utils/getFromPublic";
import { Contacts } from "../common";
import { Tooltip } from "@nextui-org/react";

export const ProductItem = () => {
    const getProductImgPathes = () => {
        const COUNT_PRODUCTS = 7;
        const pathes = [];

        for (let i = 0; i < COUNT_PRODUCTS; i++) {
            const newPath = getFromPublic(`/assets/main-page/new-products/product${i + 1}.png`)
            pathes.push({ image: newPath });
        }

        return pathes;
    }

    const imgProductPathes = getProductImgPathes();

    return (
        <div className="container pt-[30px]  sm:pb-[140px] flex flex-col md:flex-row gap-0 sm:gap-[70px]">
            <Carousel
                data={imgProductPathes}
                width="600px"
                height="640px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                    textAlign: "center",
                    maxWidth: "600px",
                    maxHeight: "700px",
                }}
            />

            <div className="flex flex-col justify-between mt-[110px] md:mt-0">
                <article className="flex flex-col gap-y-[28px] text-xl-size">
                    <h4 className="">худи St. Helens</h4>
                    <p className="text-md-size max-w-[500px]">классическое черное худи с ярким уличным принтом и не стандартным низом (надорванный)</p>
                    <Tooltip showArrow placement="bottom" size="md" color="primary" content="Наличие размеров уточняйте при заказе">
                        <p className="">Размеры: 40, 41, 42, 43, 44, 45</p>
                    </Tooltip>
                    <p className="text-md-size">Сезон: зима</p>
                    <p className="text-md-size text-gray-500">80% хлопок, 205 синтетика</p>
                    <h5 className="self-end">1200 грн.  <span className="text-gray-500 line-through">1500 грн. </span></h5>
                </article>

                <span className="self-end mt-[10px]"><Contacts emailView={false} /></span>
            </div>
        </div >
    )
}