import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup1 } from 'reducer/features/PopupState';

import { ButtonsTexts } from 'constants';

import Close from './close';

import './styles.css';


const Popup = ({
    children,
    currentStepIndex,
    _handleBack,
    _handleNext
}) => {
    const { isPopup1Active } = useSelector((state) => state.popup);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup1());
    };

    return isPopup1Active && (
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
                            <button className='button-popup variant-1' onClick={_handleNext}>
                                {ButtonsTexts.next}
                            </button>
                        </div>
                    ) : (
                        <div className='buttons'>
                            <button className='button-popup variant-2' onClick={_handleBack}>
                                {ButtonsTexts.back}
                            </button>
                            <button className='button-popup variant-1' onClick={handleClose}>
                                {ButtonsTexts.ok}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Popup;