import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { handleSwitchPopup } from 'reducer/features/ResultReducer';
import { handleNext } from 'reducer/features/Steps';

import Slider from 'react-slick';
import settings from './settings';

import { CgClose } from 'react-icons/cg';
import colors from 'themes/colors';


import './styles.css';


const Result = () => {
    const dispatch = useDispatch();

    const { item } = useSelector((state) => state.ItemReducer);

    const imagesResult = item?.result.map((image, index) => (
        <img
            key={index}
            src={image}
            className='result-image'
        />
    ));

    const handleClose = () => {
        dispatch(handleSwitchPopup());
        dispatch(handleNext())
    };

    return (
        <div className='container'>
           <div className='header-result'>
           <button type='button' className='result-button' onClick={handleClose}>
                <CgClose size={20} fill={colors.darkBlue} />
            </button>
           </div>
            <div className='result'>
               <div className='result-slide'>
               <Slider {...settings}>
                    {imagesResult}
                </Slider>
               </div>
            </div>
        </div>
    )
};

export default Result;