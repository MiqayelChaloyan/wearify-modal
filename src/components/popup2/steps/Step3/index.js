import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import Header from 'components/popup2/header';
import ImagesUpload from 'components/upload-images';

import { Texts, Titles, Gender } from 'constants';

import { Container, H3, P, ToggleBox, ToggleButton } from './styles';


const Step3 = () => {
    const { isFemale } = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const handleChangeGender = (gender) => {
        dispatch(handleUpdateData({ isFemale: gender }));
    };

    return (
        <div>
            <Header title={Titles.yourModel} />
            <Container>
                <div>
                    <H3>{Titles.gender}</H3>
                    <ToggleBox>
                        <ToggleButton
                            $isactive={isFemale}
                            onClick={() => handleChangeGender(1)}
                        >
                            {Gender.female}
                        </ToggleButton>
                        <ToggleButton
                            $isactive={!isFemale}
                            onClick={() => handleChangeGender(0)}
                        >
                            {Gender.male}
                        </ToggleButton>
                    </ToggleBox>
                </div>
                <P>{Texts.uploadDescription}</P>
                <ImagesUpload />
            </Container>
        </div>
    )
};

export default React.memo(Step3);