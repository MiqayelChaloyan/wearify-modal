import Header from "components/popup2/header";

import './styles.css';
import { useState } from "react";
import ShapeItem from "components/shape";
import { images } from "utils/fakeApi";
import SlickSlider from "ui/slickSlider";


const Step4 = () => {
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
            <Header title={'BE YOUR OWN MODEL'} />
            <div className='options'>
                <div>
                    <h3 className='title-type'>SKIN</h3>
                    <div className='skin-slide'>
                        <SlickSlider>
                            {slideItems}
                        </SlickSlider>
                    </div>
                </div>
                <div>
                    <h3 className='title-type'>AGE</h3>
                    <div className='shape-types'>
                        {shapeItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step4;