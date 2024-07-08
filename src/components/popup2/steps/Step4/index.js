import React, { useState } from 'react';

import Header from 'components/popup2/header';
import ShapeItem from 'components/shape';

import SlickSlider from 'ui/slickSlider';

import { Titles } from 'constants';

// TODO
import { images } from 'utils/fakeApi';
// 

import './styles.css';


const Step4 = React.memo(() => {
    const [activeIndexSkin, setActiveIndexSkin] = useState(null);
    const [activeIndexshape, setActiveIndexShape] = useState(null);

    const handleChangeSkin = (index) => {
        setActiveIndexSkin(index);
    };

    const handleChangeShape = (index) => {
        setActiveIndexShape(index);
    };

    const slideItems = images?.map((item, index) => (
        <ShapeItem
            key={item.title}
            source={item.source}
            isActive={index === activeIndexSkin}
            onClick={() => handleChangeSkin(index)}
        />
    ));

    const shapeItems = images.slice(0, 5)?.map((item, index) => (
        <ShapeItem
            key={item.title}
            source={item.source}
            isActive={index === activeIndexshape}
            onClick={() => handleChangeShape(index)}
        />
    ));

    return (
        <div className='step'>
            <Header title={Titles.ownModel} />
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
                    <div className='shape-types'>
                        {shapeItems}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Step4;