import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'reducer/features/PopupState';
import { handleUpdateData } from 'reducer/features/State';

import ArrowRight from 'icons/arrow';

import LoadingBar from 'ui/loading-bar';

import { Texts } from 'constants';
import colors from 'themes/colors';

import './styles.css';
import { handleSwitchPopup, handleSwitchResultLoading } from 'reducer/features/ResultReducer';
import { getDatabase, onValue, ref } from 'firebase/database';


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

    const userId = images[0]?.id;


    useEffect(() => {
        if (userId) {
            const db = getDatabase();

            const starCountRef = ref(db, 'avatars/' + userId);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                if (!data?.isLoading) {
                    // dispatch(updatedAvatarLoadingStatus(false));
                    // dispatch(updatedAvatarErrorStatus(false));

                    handleClose();
                } else {
                    // dispatch(updatedAvatarLoadingStatus(true));
                    // dispatch(updatedAvatarErrorStatus(false));

                }
                if (data?.isAvatarError) {
                    // dispatch(updatedAvatarErrorStatus(true));
                    // dispatch(updatedAvatarLoadingStatus(false));
                }
            });
        }
    }, [userId]);


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