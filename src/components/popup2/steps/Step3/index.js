import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import Header from 'components/popup2/header';
import ImagesUpload from 'components/upload-images';

import { Texts, Titles, Gender } from 'constants';

import cn from 'classnames';
import './styles.css';


const Step3 = React.memo(() => {
    const { isFemale } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    // const [isFemale, setIsFemale] = useState(defaultFemale);

    const handleChangeGender = (gender) => {
        dispatch(handleUpdateData({ isFemale: gender }));
        // setIsFemale(gender);
    };

    return (
        <div>
            <Header title={Titles.yourModel} />
            <div className='options'>
                <div>
                    <h3 className='toggle-title'>{Titles.gender}</h3>
                    <div className='toggle-buttons'>
                        <button
                            className={cn('button-sizes', isFemale && 'active-sizes')}
                            onClick={() => handleChangeGender(0)}
                        >
                            {Gender.female}
                        </button>
                        <button
                            className={cn('button-sizes', !isFemale && 'active-sizes')}
                            onClick={() => handleChangeGender(1)}
                        >
                            {Gender.male}
                        </button>
                    </div>
                </div>
                <p className='description'>
                    {Texts.uploadDescription}
                </p>
                <ImagesUpload />
            </div>
        </div>
    )
});

export default Step3;