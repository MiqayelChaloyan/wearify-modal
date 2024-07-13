import React from 'react';

import { useSelector } from 'react-redux';

import LoadingBar from 'ui/loading-bar';
import ArrowRight from 'icons/arrow';
import { Texts } from 'constants';
import colors from 'themes/colors';

import './styles.css'

const Loader = React.memo(({ handleClose }) => {
    const { item } = useSelector((state) => state.ItemReducer);

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