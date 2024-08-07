import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const FlatList = ({ list }) => (
    <Swiper
        watchSlidesProgress={true}
        slidesPerView={3.1}
        spaceBetween={5}
        effect={'cards'}
        className="mySwiper"
    // breakpoints={{
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // }}
    >
        {list}
    </Swiper>
);


export default FlatList;