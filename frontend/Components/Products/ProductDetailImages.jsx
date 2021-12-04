import {
    Slider, Slide, ImageWithZoom,
    ButtonBack,
    ButtonFirst,
    ButtonLast,
    ButtonNext,
    CarouselProvider,
    DotGroup,

} from 'pure-react-carousel';

const ProductDetailImages = ({ product }) => {
    const { product_images } = product
    return (
        <div className="md:flex-1 mb-10 px-2">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4  items-center justify-center h-96 rounded-lg ">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={75}
                        totalSlides={product_images.length}
                        infinite
                        hasMasterSpinner
                        isPlaying
                    >
                        <Slider>
                            {product_images.map((image, key) => (
                                <Slide index={key} key={key}>
                                    <ImageWithZoom className="h-96 rounded-lg" src={image.image} />
                                </Slide>
                            ))}
                        </Slider>
                        {/* <ButtonFirst>First</ButtonFirst>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                        <ButtonLast>Last</ButtonLast> */}
                        <DotGroup dotNumbers />
                    </CarouselProvider>
                    {/* <img
                        className="h-96 rounded-lg" 
                        alt={defaultImage.alt_text}
                        src={defaultImage.image}
                    /> */}
                </div>
            </div>
        </div >
    );
}

export default ProductDetailImages;