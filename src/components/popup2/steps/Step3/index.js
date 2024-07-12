import React, { useState } from 'react';

import Header from 'components/popup2/header';
import ImagesUpload from 'components/upload-images';

import { Texts, Titles, Gender } from 'constants';

import cn from 'classnames';
import './styles.css';


const Step3 = React.memo(() => {
    const [userGender, setUserGender] = useState(Gender.female);

    const handleChangeGender = (gender) => {
        setUserGender(gender)
    }

    return (
        <div>
            <Header title={Titles.ownModel} />
            <div className='options'>
                <div>
                    <h3 className='toggle-title'>{Titles.gender}</h3>
                    <div className='toggle-buttons'>
                        <button
                            className={cn('button-sizes', userGender === Gender.female && 'active-sizes')}
                            onClick={() => handleChangeGender(Gender.female)}
                        >
                            {Gender.female}
                        </button>
                        <button
                            className={cn('button-sizes', userGender === Gender.male && 'active-sizes')}
                            onClick={() => handleChangeGender(Gender.male)}
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