import { Carousel } from 'react-carousel-minimal';
import { getFromPublic } from '../../_utils/getFromPublic';

export const CarouselBaner = () => {
    const COUNT_PRODUCTS = 6;
    const getProductImgPathes = () => {
        const pathes = [];

        for (let i = 0; i < COUNT_PRODUCTS; i++) {
            const newPath = getFromPublic(`/assets/main-page/new-products/product${i + 1}.png`)
            pathes.push({ image: newPath });
        }

        return pathes;
    }

    const imgProductPathes = getProductImgPathes();
    return (
        <Carousel
            data={imgProductPathes}
            time={5000}
            width="1000px"
            height="500px"
            captionStyle={{
                fontSize: '2em',
                fontWeight: 'bold',
            }}
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="transparent"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "1000px",
                maxHeight: "500px",
                margin: "40px auto",
            }}
        />
    )
}