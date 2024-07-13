import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import Header from 'components/popup2/header';
import Item from 'components/slideItem';

import SlickSlider from 'ui/slickSlider';

import { Titles } from 'constants';
import { FEMALE_IMAGES, MALE_IMAGES } from 'constants/data';

// TODO
import { images } from 'utils/fakeApi';
// 

import './styles.css';


const Step4 = React.memo(() => {
    const { isFemale, age } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const ages = isFemale ? FEMALE_IMAGES.AGE : MALE_IMAGES.AGE;


    const [activeIndexSkin, setActiveIndexSkin] = useState(null);
    // const [activeIndexshape, setActiveIndexShape] = useState(null);

    const handleChangeSkin = (index) => {
        setActiveIndexSkin(index);
    };

    const handleChangeAge = (ageId) => {
        dispatch(handleUpdateData({ age: ageId }));
        // setActiveIndexShape(index);
    };

    const slideItems = images?.map((item, index) => (
        <Item
            key={item.title}
            source={item.source}
            isActive={index === activeIndexSkin}
            onClick={() => handleChangeSkin(index)}
        />
    ));

    const ageItems = ages?.map((item) => (
        <Item
            key={item.title}
            source={item.source}
            isActive={item.id === age}
            onClick={() => handleChangeAge(item.id)}
        />
    ));

    return (
        <div className='step'>
            <Header title={Titles.yourModel} />
            <div className='options'>
                <div>
                    <h3 className='title-type'>{Titles.skin}</h3>
                    <div className='skin-slide'>
                        <SlickSlider>
                            {slideItems}
                        </SlickSlider>
                    </div>
                </div>
                <div>
                    <h3 className='title-type'>{Titles.age}</h3>
                    <div className='age-types'>
                        {ageItems}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Step4;