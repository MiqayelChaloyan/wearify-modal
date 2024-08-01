import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import settings from './settings';

import { Container } from './styles';

import './styles.css';

const SlickSlider = React.memo(({
    children
}) => {
    return (
        <Container>
            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    );
});

export default SlickSlider;
