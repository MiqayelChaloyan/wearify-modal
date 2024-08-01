import React, { useEffect } from 'react';

import { getDatabase, onValue, ref } from 'firebase/database';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'reducer/features/PopupState';
import { handleUpdateData } from 'reducer/features/State';
import { handleSwitchPopup } from 'reducer/features/ResultReducer';

import ArrowRight from 'icons/arrow';

import LoadingBar from 'ui/loading-bar';

import { Texts } from 'constants';

import colors from 'themes/colors';

import { Box, Container, Image, Loader, P } from './styles';


const Step5 = () => {
    const { images } = useSelector(state => state.imageReducer);
    const { item } = useSelector((state) => state.ItemReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleUpdateData({ uploadImages: [...images] }));
    }, []);

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup2());
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
                    // TODO
                    // dispatch(updatedAvatarLoadingStatus(false));
                    // dispatch(updatedAvatarErrorStatus(false));
                    handleClose();
                } else {
                    // TODO
                    // dispatch(updatedAvatarLoadingStatus(true));
                    // dispatch(updatedAvatarErrorStatus(false));
                }
                if (data?.isAvatarError) {
                    // TODO
                    // dispatch(updatedAvatarErrorStatus(true));
                    // dispatch(updatedAvatarLoadingStatus(false));
                }
            });
        }
    }, [userId]);


    return (
        <Container>
            <Box>
                <Image src={images[0]?.source} alt={images[0]?.id} />
                <ArrowRight
                    width={19}
                    height={19}
                    fill={colors.lightGray}
                />
                <Image src={item?.imgPath} alt={item?.name} />
            </Box>
            <P>{Texts.loadingDescription1}</P>
            <Loader>
                <LoadingBar handleSubmit={handleClose} />
            </Loader>
        </Container>
    );
};

export default React.memo(Step5);