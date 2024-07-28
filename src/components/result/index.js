import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { handleSwitchPopup } from 'reducer/features/ResultReducer';
import { handleNext } from 'reducer/features/Steps';

import Slider from 'react-slick';
import settings from './settings';

import { CgClose } from 'react-icons/cg';
import colors from 'themes/colors';


import './styles.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


const Result = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState(null);
    const { images } = useSelector(state => state.imageReducer);

    const userId = images[0]?.id;

    // const { item } = useSelector((state) => state.ItemReducer);

    // const imagesResult = item?.result.map((image, index) => (
    //     <img
    //         key={index}
    //         src={image}
    //         className='result-image'
    //     />
    // ));

    const handleClose = () => {
        dispatch(handleSwitchPopup());
        dispatch(handleNext())
    };

    const storage = getStorage();
    const starsRef = ref(storage, `WEB/${userId}/result_${userId}.png`);

    useEffect(() => {
        getDownloadURL(starsRef)
            .then((url) => {
                setUrl(url)
            })
            .catch(_ => {
                console.log(_, 'error');
            })
    }, []);


    return (
        <div className='container'>
            <div className='header-result'>
                <button type='button' className='result-button' onClick={handleClose}>
                    <CgClose size={20} fill={colors.darkBlue} />
                </button>
            </div>
            <div className='result'>
                <div className='result-slide'>
                    {/* <Slider {...settings}>
                    {imagesResult}
                </Slider> */}
                    <img
                        src={url}
                        className='result-image'
                    />
                </div>
            </div>
        </div>
    )
};

export default Result;