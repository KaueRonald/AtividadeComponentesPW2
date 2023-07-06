import Carousel from 'react-bootstrap/Carousel';
import style from "./carousels.module.css"


interface IProps {
    firstImage: string,
    firstDesc: string,
    firstName: string,
    secondImage: string,
    secondDesc: string,
    secondName: string,
    thirdImage: string,
    thirdDesc: string,
    thirdName: string,
}

export default function Carousels({ firstDesc, firstImage, firstName, secondDesc, secondName, secondImage, thirdName, thirdDesc, thirdImage }: IProps) {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className={style.images}
                    src={firstImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className={style.colorName}>{firstName}</h3>
                    <p>{firstDesc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={style.images}
                    src={secondImage}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className={style.colorName}>{secondName}</h3>
                    <p>{secondDesc}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={style.images}
                    src={thirdImage}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className={style.colorName}>{thirdName}</h3>
                    <p>
                        {thirdDesc}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
