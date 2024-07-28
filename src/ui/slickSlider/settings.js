import colors from 'themes/colors';
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
};

export default settings;