import React from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'reducer/features/PopupState';

import ArrowRight from 'icons/arrow';

import LoadingBar from 'ui/loading-bar';

import { Texts } from 'constants';
import colors from 'themes/colors';

import './styles.css';


const Step5 = React.memo(() => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup2());
    };

    return (
        <div className='child'>
            <div className='process'>
                <div className='div'></div>
                <ArrowRight width={19} height={19} fill={colors.lightGray} />
                <div className='div'></div>
            </div>
            <p className='queue-text'>
                {Texts.loadingDescription1}
            </p>
            <div className='loader'>
                <LoadingBar handleSubmit={handleClose} />
            </div>
        </div>
    );
})

export default Step5;