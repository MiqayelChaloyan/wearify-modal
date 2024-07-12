import React from 'react';

import { useDispatch } from 'react-redux';
import { handleSwitchStatusPopup1, handleSwitchStatusPopup2 } from 'reducer/features/PopupState';

import MeasurementsIcon from 'icons/measurements';
import UserIcon from 'icons/user'
import colors from 'themes/colors';

import './styles.css';


const Measurements = React.memo(() => {
    const dispatch = useDispatch();

    const _handleSubmitPopup1 = () => {
        dispatch(handleSwitchStatusPopup1());
    };

    const _handleSubmitPopup2 = () => {
        dispatch(handleSwitchStatusPopup2());
    };

    return (
        <div className='containter'>
            <div className='measurements'>
                <button className='button' onClick={_handleSubmitPopup2}>
                    <UserIcon width={25} height={25} fill={colors.darkBlue} />
                </button>
                <button className='button' onClick={_handleSubmitPopup1}>
                    <MeasurementsIcon />
                </button>
            </div>
        </div>
    )
});

export default Measurements;