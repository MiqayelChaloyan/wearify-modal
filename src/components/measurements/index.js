import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup1, handleSwitchStatusPopup2 } from 'reducer/features/PopupState';

import MeasurementsIcon from 'icons/measurements';
import UserIcon from 'icons/people'
import colors from 'themes/colors';

import './styles.css';


const Measurements = React.memo(() => {
    const { isLoading } = useSelector(state => state.loaderCloSet);
    const { isFinish } = useSelector((state) => state.steps);

    const dispatch = useDispatch();

    const _handleSubmitPopup1 = () => {
        dispatch(handleSwitchStatusPopup1());
    };

    const _handleSubmitPopup2 = () => {
        dispatch(handleSwitchStatusPopup2());
    };

    return isLoading && (
        <div className='containter'>
            <div className='measurements'>
                <button className='button' onClick={_handleSubmitPopup1}>
                    <MeasurementsIcon size={24} fill={'rgb(235, 235, 237)'} />
                </button>
                <div className='line-horizontal' />
                <button className='button' onClick={_handleSubmitPopup2} disabled={!isFinish}>
                    <UserIcon size={24} fill={isFinish ? 'rgb(235, 235, 237)' : 'rgb(100, 100, 102)'} />
                </button>
            </div>
        </div>
    )
});

export default Measurements;