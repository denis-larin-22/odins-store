import { Carousel } from "react-carousel-minimal"
import { getFromPublic } from "../../_utils/getFromPublic";
import { Contacts, FavoritesLogo } from "../common";
import { Button, Tooltip } from "@nextui-org/react";

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
        <div className="container pt-[30px] sm:pb-[140px] flex flex-col md:flex-row gap-0 sm:gap-[70px]">
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
                <article className="relative flex flex-col gap-y-[28px] text-xl-size">
                    <Tooltip content="Add to favorites" placement="left" color="success">
                        <Button variant="bordered" className="absolute top-0 right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" height="25px" width="25px" version="1.1" id="Layer_1" viewBox="0 0 455 455" space="preserve"><path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.384-60.398-46.92-99.132-46.92  C57.586,10.346,0,67.931,0,138.714c0,55.426,33.05,119.535,98.23,190.546c50.161,54.647,104.728,96.959,120.257,108.626l9.01,6.769  l9.01-6.768c15.529-11.667,70.098-53.978,120.26-108.625C421.949,258.251,455,194.141,455,138.714  C455,67.931,397.414,10.346,326.632,10.346z M334.666,308.974c-41.259,44.948-85.648,81.283-107.169,98.029  c-21.52-16.746-65.907-53.082-107.166-98.03C61.236,244.592,30,185.717,30,138.714c0-54.24,44.128-98.368,98.368-98.368  c35.694,0,68.652,19.454,86.013,50.771l13.119,23.666l13.119-23.666c17.36-31.316,50.318-50.771,86.013-50.771  c54.24,0,98.368,44.127,98.368,98.368C425,185.719,393.763,244.594,334.666,308.974z"></path>
                            </svg>
                        </Button>
                    </Tooltip>
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