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
    >
        {list}
    </Swiper>
);


export default FlatList;