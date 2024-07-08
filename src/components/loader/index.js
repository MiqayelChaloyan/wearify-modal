import React from 'react';

import LoadingBar from 'ui/loading-bar';
import ArrowRight from 'icons/arrow';
import { Texts, colors } from 'constants';

import './styles.css'

const Loader = React.memo(({ handleClose }) => {
    return (
        <div className='loader-bar'>
            <div className='process8'>
                <div className='div8'></div>
                <div className='arrow-loading'>
                    <ArrowRight width={19} height={19} fill={colors.lightGray} />
                </div>
                <div className='div8 arrow-loading'></div>
            </div>
            <div>
                <p className='info-text'>
                    {Texts.creatingModelImage}
                </p>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </div>
    )
});

export default Loader;