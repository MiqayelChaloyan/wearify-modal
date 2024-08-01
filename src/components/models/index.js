import React from 'react';
import { SwiperSlide } from 'swiper/react';

import FlatList from 'components/flatList';

import { Column, Image } from './styles';


const Models = ({ models, onClick, activeIndex }) => {
    const items = models?.map((model, index) => (
        <SwiperSlide key={model.id}>
            <Column $isactive={activeIndex === index} onClick={() => onClick(index)}>
                <Image
                    src={model.imgPath}
                    alt={model.id}
                />
            </Column>
        </SwiperSlide>
    ));

    return <FlatList list={items} />;
};

export default Models;
