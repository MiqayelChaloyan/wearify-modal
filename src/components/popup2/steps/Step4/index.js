import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import Header from 'components/popup2/header';
import Item from 'components/slideItem';

import SlickSlider from 'ui/slickSlider';

import { Titles } from 'constants';
import { FEMALE_IMAGES, MALE_IMAGES } from 'constants/data';

import { AgeBox, Container, H3, SkinBox } from './styles';


const Step4 = () => {
    const { isFemale } = useSelector((state) => state.data);
    const [skinID, setSkinID] = useState();
    const [ageID, setAgeID] = useState();

    const userData = useSelector((state) => state.data);
    // console.log(userData)

    const dispatch = useDispatch();

    const ages = isFemale ? FEMALE_IMAGES.AGE : MALE_IMAGES.AGE;
    const skinTones = isFemale ? FEMALE_IMAGES.SKIN_TONE : MALE_IMAGES.SKIN_TONE;

    const handleChangeSkin = (id, skinTone) => {
        setSkinID(id);
        dispatch(handleUpdateData({ skinTone }));
    };

    const handleChangeAge = (id, age) => {
        setAgeID(id);
        dispatch(handleUpdateData({ age }));
    };

    const slideItems = skinTones?.map((item) => (
        <Item
            key={item.ID}
            source={item.source}
            isActive={item.ID === skinID}
            onClick={() => handleChangeSkin(item.ID, item.Skin)}
        />
    ));

    const ageItems = ages?.map((item) => (
        <Item
            key={item.ID}
            source={item.source}
            isActive={item.ID === ageID}
            onClick={() => handleChangeAge(item.ID, item.Age)}
        />
    ));

    return (
        <div>
            <Header title={Titles.yourModel} />
            <Container>
                <div>
                    <H3>{Titles.skin}</H3>
                    <SkinBox>
                        <SlickSlider>
                            {slideItems}
                        </SlickSlider>
                    </SkinBox>
                </div>
                <div>
                    <H3>{Titles.age}</H3>
                    <AgeBox>{ageItems}</AgeBox>
                </div>
            </Container>
        </div>
    )
};

export default React.memo(Step4);