import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup1, handleSwitchStatusPopup2 } from 'reducer/features/PopupState';

import MeasurementsIcon from 'icons/measurements';
import UserIcon from 'icons/people'

import { Box, Button, Container, HorizontalLine } from './styles';


const Measurements = () => {
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
        <Container>
            <Box>
                <Button onClick={_handleSubmitPopup1}>
                    <MeasurementsIcon size={24} fill={'#0C0D34'} />
                </Button>
                <HorizontalLine />
                <Button onClick={_handleSubmitPopup2} disabled={!isFinish}>
                    <UserIcon size={24} fill={isFinish ? '#0C0D34' : '#ACACAC'} />
                </Button>
            </Box>
        </Container>
    )
};

export default React.memo(Measurements);