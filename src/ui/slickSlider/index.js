import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import settings from './settings';

import './styles.css';

const SlickSlider = React.memo(({
    children
}) => {
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
});

export default SlickSlider;
