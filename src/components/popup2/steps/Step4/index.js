import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import Header from 'components/popup2/header';
import Item from 'components/slideItem';

import SlickSlider from 'ui/slickSlider';

import { Titles } from 'constants';
import { FEMALE_IMAGES, MALE_IMAGES } from 'constants/data';

import { AgeBox, Container, H3, SkinBox } from './styles';


const Step4 = () => {
    const { isFemale, age, skinTone } = useSelector((state) => state.data);


    const userData = useSelector((state) => state.data);
    console.log(userData)

    const dispatch = useDispatch();

    const ages = isFemale ? FEMALE_IMAGES.AGE : MALE_IMAGES.AGE;
    const skinTones = isFemale ? FEMALE_IMAGES.SKIN_TONE : MALE_IMAGES.SKIN_TONE;

    const handleChangeSkin = (skinToneId) => {
        dispatch(handleUpdateData({ skinTone: skinToneId }));
    };

    const handleChangeAge = (ageId) => {
        dispatch(handleUpdateData({ age: ageId }));
    };

    const slideItems = skinTones?.map((item) => (
        <Item
            key={item.ID}
            source={item.source}
            isActive={item.ID === skinTone}
            onClick={() => handleChangeSkin(item.ID)}
        />
    ));

    const ageItems = ages?.map((item) => (
        <Item
            key={item.ID}
            source={item.source}
            isActive={item.ID === age}
            onClick={() => handleChangeAge(item.ID)}
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