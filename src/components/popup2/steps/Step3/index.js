import React from 'react';

import Header from 'components/popup2/header';
import ImagesUploadTest from 'components/upload-images';

import { Texts, Titles } from 'constants';

import './styles.css';


const Step3 = React.memo(() => {
    return (
        <div>
            <Header title={Titles.ownModel} />
            <div className='options'>
                <p className='description'>
                    {Texts.uploadDescription}
                </p>
                <ImagesUploadTest />
            </div>
        </div>
    )
});

export default Step3;