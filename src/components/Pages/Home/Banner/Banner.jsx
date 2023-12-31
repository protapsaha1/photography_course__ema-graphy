import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../../../assets/image/photo1.jpeg';
import photo2 from '../../../../assets/image/photo2.jpg';
import photo3 from '../../../../assets/image/photo3.jpeg';
import photo4 from '../../../../assets/image/photo4.jpeg';
import photo5 from '../../../../assets/image/photo5.jpg';



const Banner = () => {
    return (
        <Carousel>
            <div >
                <img src={photo1} />
            </div>
            <div >
                <img src={photo2} />
            </div>
            <div >
                <img src={photo3} />
            </div>
            <div >
                <img src={photo4} />
            </div>
            <div >
                <img src={photo5} />
            </div>
        </Carousel>

    );
};
export default Banner;
