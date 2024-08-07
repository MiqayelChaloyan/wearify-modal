import { SwiperSlide } from 'swiper/react';
import FlatList from 'components/flatList';

import cn from 'classnames';
import './styles.css';


const Models = ({ models, onClick, activeIndex }) => {
    const items = models?.map((model, index) => (
        <SwiperSlide key={model.id}>
            <div
                className={cn('column', activeIndex === index && 'active-slide')}
                onClick={() => onClick(index)}
            >
                <img
                    src={model.imgPath}
                    alt={model.id}
                    className='model-image'
                />
            </div>
        </SwiperSlide>
    ))

    return <FlatList list={items} />
};

export default Models;