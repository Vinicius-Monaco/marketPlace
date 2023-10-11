import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../images/image_carousel1.jpg";
import Image2 from "../images/image_carousel2.jpg";
import Image3 from "../images/image_carousel3.jpg";
import ImageCarousel from "../components/ImageCarousel"
import "../styles/Introduction.css"
import { Button, Carousel } from 'react-bootstrap';

const Introduction = () => {
    return (
        <div className="introductionArea">
            <Carousel className="carousel" controls={false} indicators={false} pause={false}>
                <Carousel.Item>
                    <ImageCarousel imageLink={Image2} />
                </Carousel.Item>
                <Carousel.Item>
                    <ImageCarousel imageLink={Image3} />
                </Carousel.Item>
                <Carousel.Item>
                <ImageCarousel imageLink={Image1} />
                </Carousel.Item>
            </Carousel>
            <Button className="button" variant='none'>
                <span className="valueButton">VER CATÁLOGO</span>
                <div className="boxShadow"></div>
            </Button>
        </div>
    )
}

export default Introduction