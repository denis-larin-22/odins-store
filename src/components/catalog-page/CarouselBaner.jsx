import { Carousel } from 'react-carousel-minimal';

export const CarouselBaner = ({ list }) => {
    // The slider accepts an array of objects where each object must have two properties: {image: url, caption: text}

    const images = list.map(product => ({
        image: product.images[0],
        caption: product.name
    }));

    if (images.length) {
        return (
            <Carousel
                data={images}
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
    } else {
        return null
    }


}