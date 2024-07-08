import React, { useState } from 'react';

import SlickSlider from 'ui/slickSlider';
import ShapeItem from 'components/shape';
import Header from '../header';

import { Titles } from 'constants';

import { images } from 'utils/fakeApi';

import './styles.css';


const Step2 = React.memo(() => {
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