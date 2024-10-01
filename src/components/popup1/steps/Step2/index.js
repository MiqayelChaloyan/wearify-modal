import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import SlickSlider from 'ui/slickSlider';
import Item from 'components/slideItem';
import Header from '../header';

import { Titles } from 'constants';
import { FEMALE_IMAGES, MALE_IMAGES } from 'constants/data';

import { Box, Container, H3, ShapeBox, SlideBox } from './styles';


const Step2 = () => {
    const { isFemale, skin, shape } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const shapes = isFemale ? FEMALE_IMAGES.SHAPE : MALE_IMAGES.SHAPE;
    const skins = isFemale ? FEMALE_IMAGES.SKIN : MALE_IMAGES.SKIN;

    const handleChangeSkin = (skinId) => {
        dispatch(handleUpdateData({ skin: skinId }));
    };

    const handleChangeShape = (shapeId) => {
        dispatch(handleUpdateData({ shape: shapeId }));
    };

    const slideItems = skins?.map((item) => (
        <Item
            key={item.title}
            source={item.source}
            isActive={item.id === skin}
            onClick={() => handleChangeSkin(item.id)}
        />
    ));

    const shapeItems = shapes?.map((item) => (
        <Item
            key={item.title}
            source={item.source}
            isActive={item.id === shape}
            onClick={() => handleChangeShape(item.id)}
        />
    ));

    return (
        <Container>
            <Header title={Titles.selectSkin} />
            <Box>
                <div>
                    <H3>{Titles.skin}</H3>
                    <SlideBox>
                        <SlickSlider>
                            {slideItems}
                        </SlickSlider>
                    </SlideBox>
                </div>
                <div>
                    <H3>{Titles.shape} </H3>
                    <ShapeBox> {shapeItems} </ShapeBox>
                </div>
            </Box>
        </Container>
    )
};

export default React.memo(Step2);