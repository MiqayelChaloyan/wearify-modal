import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatus } from 'store/features/PopupState';

import Close from './close';

import './styles.css';


const Popup = ({
    children,
    currentStepIndex,
    _handleBack,
    _handleNext
}) => {
    const { isPopupActive } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleSwitchStatus());
    };

    return isPopupActive && (
        <div className='container'>
            <div className='popup'>
                <div className='header'>
                    <Close className='close-modal' onClose={handleClose} />
                </div>
                <div>
                    {children}
                </div>
                <div>
                    {currentStepIndex === 0 ? (
                        <div className='buttons'>
                            <button className='button-popup' onClick={_handleNext}>Next</button>
                        </div>
                    ) : (
                        <div className='buttons'>
                            <button className='button-popup' onClick={_handleBack}>Back</button>
                            <button className='button-popup' onClick={handleClose}>Ok</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Popup;