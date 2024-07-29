import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import SlickSlider from 'ui/slickSlider';
import Item from 'components/slideItem';
import Header from '../header';

import { Titles } from 'constants';
import { FEMALE_IMAGES, MALE_IMAGES } from 'constants/data';

import './styles.css';


const Step2 = React.memo(() => {
    const { isFemale, skin, shape } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    // const [activeIndexSkin, setActiveIndexSkin] = useState(skin);
    // const [activeIndexshape, setActiveIndexShape] = useState(shape);

    const shapes = isFemale ? FEMALE_IMAGES.SHAPE : MALE_IMAGES.SHAPE;
    const skins = isFemale ? FEMALE_IMAGES.SKIN : MALE_IMAGES.SKIN;

    const handleChangeSkin = (skinId) => {
        // setActiveIndexSkin(index);
        dispatch(handleUpdateData({ skin: skinId }));
    };

    const handleChangeShape = (shapeId) => {
        // setActiveIndexShape(index);
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
            isActive={item.id  === shape}
            onClick={() => handleChangeShape(item.id)}
        />
    ));

    return (
        <div className='step'>
            <Header title={Titles.selectSkin} />
            <div className='options'>
                <div>
                    <h3 className='title-type'>
                        {Titles.skin}
                    </h3>
                    <div className='skin-slide'>
                        <SlickSlider >
                            {slideItems}
                        </SlickSlider>
                    </div>
                </div>
                <div>
                    <h3 className='title-type'>
                        {Titles.shape}
                    </h3>
                    <div className='shape-types'>
                        {shapeItems}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Step2;