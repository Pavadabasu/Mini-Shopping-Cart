import { Carousel } from "react-bootstrap";
import img1 from '../images/kid.jpg';
import img2 from '../images/women.png';
import img3 from '../images/men1.png';
const Carsol = () => {
    return (
        <div className="carsol">
          
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src={img1} height={600}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2} height={600}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3} height={600}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <br />
            <br />
            <br />
            
            
        </div>
    );
}

export default Carsol;