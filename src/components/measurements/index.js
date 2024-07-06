import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatus } from 'store/features/PopupState';

// TODO
import { FaUserAlt } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
//

import './styles.css';


const Measurements = () => {
    const dispatch = useDispatch();
    const { isPopupActive } = useSelector((state) => state.popup);

    const _handleSubmit = () => {
        dispatch(handleSwitchStatus());
    };

    return (
        <div className='containter'>
            <div className='measurements'>
                <button className='button'>
                    <FaUserAlt size={30} fill='gray' />
                </button>
                <button className='button' onClick={_handleSubmit}>
                    <FaPenRuler size={20} fill='#0C0D34' />
                </button>
            </div>
        </div>
    )
};

export default Measurements;