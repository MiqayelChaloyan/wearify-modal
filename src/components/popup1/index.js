import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup1 } from 'reducer/features/PopupState';
import { handleNext } from 'reducer/features/Steps';

import { ButtonsTexts } from 'constants';

import Close from './close';

import { Box, ButtonVariant1, ButtonVariant2, Container, Header, Modal } from './styles';


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

    const handleSaveAndClsoe = () => {
        dispatch(handleNext());
        dispatch(handleSwitchStatusPopup1());
    };

    return isPopup1Active && (
        <Container>
            <Modal>
                <Header>
                    <Close onClose={handleClose} />
                </Header>
                <div>
                    {children}
                </div>
                <div>
                    {currentStepIndex === 0 ? (
                        <Box>
                            <ButtonVariant1 onClick={_handleNext}>
                                {ButtonsTexts.next}
                            </ButtonVariant1>
                        </Box>
                    ) : (
                        <Box>
                            <ButtonVariant2 onClick={_handleBack}>
                                {ButtonsTexts.back}
                            </ButtonVariant2>
                            <ButtonVariant1 onClick={handleSaveAndClsoe}>
                                {ButtonsTexts.ok}
                            </ButtonVariant1>
                        </Box>
                    )}
                </div>
            </Modal>
        </Container>
    )
};

export default Popup;