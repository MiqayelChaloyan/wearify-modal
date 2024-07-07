import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup1, handleSwitchStatusPopup2 } from 'store/features/PopupState';

// TODO
import { FaUserAlt } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
//

import './styles.css';


const Measurements = () => {
    const dispatch = useDispatch();
    // const { isPopupActive } = useSelector((state) => state.popup);

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
                    <FaUserAlt size={30} fill='#0C0D34' />
                </button>
                <button className='button' onClick={_handleSubmitPopup1}>
                    <FaPenRuler size={20} fill='#0C0D34' />
                </button>
            </div>
        </div>
    )
};

export default Measurements;