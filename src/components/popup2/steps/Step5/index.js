import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'reducer/features/PopupState';
import { handleUpdateData } from 'reducer/features/State';

import ArrowRight from 'icons/arrow';

import LoadingBar from 'ui/loading-bar';

import { Texts } from 'constants';
import colors from 'themes/colors';

import './styles.css';
import { handleSwitchPopup, handleSwitchResultLoading } from 'reducer/features/ResultReducer';


const Step5 = React.memo(() => {
    const { images } = useSelector(state => state.imageReducer);
    const { item } = useSelector((state) => state.ItemReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleUpdateData({ uploadImages: [...images] }));
    }, []);

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup2());
        // dispatch(handleSwitchResultLoading());
        dispatch(handleSwitchPopup());
    };

    return (
        <div className='child'>
            <div className='process'>
                <img className='div' src={images[0]?.source} alt={images[0]?.id} />
                <ArrowRight width={19} height={19} fill={colors.lightGray} />
                <img className='div' src={item?.imgPath} alt={item?.name} />
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