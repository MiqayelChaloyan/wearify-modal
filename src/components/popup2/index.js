import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchStatusPopup2 } from 'reducer/features/PopupState';

import Close from './close';

import { ButtonsTexts } from 'constants';

import { Box, ButtonVariant1, ButtonVariant2, ButtonVariant3, Container, Header, Modal } from './styles';


const Popup = ({
    children,
    currentStepIndex,
    _handleBack,
    _handleNext
}) => {
    const { isPopup2Active } = useSelector((state) => state.popup);
    const { images } = useSelector(state => state.imageReducer);

    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        setIsEmpty(images.length === 0);
    }, [images.length]);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleSwitchStatusPopup2());
    };

    return isPopup2Active && (
        <Container>
            <Modal>
                <Header>
                    <Close onClose={handleClose} />
                </Header>
                <div>
                    {children}
                </div>
                <div>
                    {currentStepIndex === 0 && (
                        <Box>
                            <ButtonVariant3
                                $disabled={isEmpty}
                                onClick={_handleNext}
                                disabled={isEmpty}
                            >
                                {ButtonsTexts.next}
                            </ButtonVariant3>
                        </Box>
                    )}
                    {currentStepIndex === 1 && (
                        <Box>
                            <ButtonVariant2 onClick={_handleBack}>
                                {ButtonsTexts.back}
                            </ButtonVariant2>
                            <ButtonVariant1 onClick={_handleNext}>
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