import "../styles/ImageCarousel.css"

const ImageCarousel = (props) => {
    return (
        <div className="carouselItem">
            <img src={props.imageLink} />
            <div className="shadowDiv"></div>
        </div>
    )
}

export default ImageCarousel