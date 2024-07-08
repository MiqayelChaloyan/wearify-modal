import { colors } from 'constants';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const PrevArrow = ({ className, style, onClick }) => (
    <div onClick={onClick} className={`arrow ${className}`} >
        <IoIosArrowBack size={25} fill={colors.darkBlue} />
    </div>
);

const NextArrow = ({ className, style, onClick }) => (
    <div onClick={onClick} className={`arrow ${className}`} >
        <IoIosArrowForward size={25} fill={colors.darkBlue} />
    </div>
);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             initialSlide: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    // ]
};

export default settings;