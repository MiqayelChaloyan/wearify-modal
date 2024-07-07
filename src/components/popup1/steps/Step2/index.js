import React from 'react';

import SlickSlider from 'ui/slickSlider';
import ShapeItem from 'components/shape';
import Header from '../header';

import { images } from 'utils/fakeApi';

import './styles.css';


const Step2 = React.memo(() => {
    const slideItems = images?.map(item => (<ShapeItem key={item.title} source={item.source} />));
    const shapeItems = images.slice(0, 5)?.map(item => (<ShapeItem key={item.title} source={item.source} />));

    return (
        <div className='step'>
            <Header title={'SELECT SKIN & SHAPE'} />
            <div className='options'>
                <div>
                    <h3 className='title-type'>SKIN</h3>
                    <div className='skin-slide'>
                        <SlickSlider >
                            {slideItems}
                        </SlickSlider>
                    </div>
                </div>
                <div>
                    <h3 className='title-type'>SHAPE</h3>
                    <div className='shape-types'>
                        {shapeItems}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Step2;