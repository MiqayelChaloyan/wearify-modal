import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleAddItem } from 'reducer/features/ItemReducer';

import Square from 'icons/square';

import { CgClose } from 'react-icons/cg';

// import Loader from 'components/loader';
import Models from 'components/models';
import Header from 'components/header';
import Iframe from 'components/iframe';
import Result from 'components/result';
import ModelViewer from 'components/model-viewer';
import Measurements from 'components/measurements';
import FitHide from 'components/fit';
import LayoutPopup1 from 'components/popup1/layout';
import LayoutPopup2 from 'components/popup2/layout';

import colors from 'themes/colors';

import COMBINED_MODELS from 'constants/models';

import { Box, Button, CloseButton, Container, MotionBox } from './styles';

// data-product-id="8666802487521"


const Step1 = ({
    _handleBack,
    _handleNext
}) => {
    const { isOpen } = useSelector((state) => state.result);
    const { isLoading } = useSelector(state => state.loaderCloSet);
    const { url, isCloset } = useSelector((state) => state.data);

    const dispatch = useDispatch();
    const element = document.getElementById('web-modal');
    const productId = element.getAttribute('productid');

    const val = '8666802487521'
    const prod = productId !== val;

    const models = prod ? COMBINED_MODELS.sportWearing : COMBINED_MODELS.sneakers;

    const [uriGlb, setUriGlb] = useState(models[0].glbPath)
    const [hide, setHide] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        dispatch(handleAddItem(models[0]));
    }, [])

    const handleSubmit = (index) => {
        setUriGlb(COMBINED_MODELS.sportWearing[index].glbPath)
        setActiveIndex(index);
        dispatch(handleAddItem(models[index]));
    }

    const handleHide = () => setHide(!hide);

    const handleClose = () => document.getElementById('web-modal').style.display = 'none';


    // const handleCloseLoading = () => {
    //     dispatch(handleSwitchResultLoading())
    //     dispatch(handleSwitchPopup());
    // };

    useEffect(() => {
        if (isCloset) {
            setUriGlb(url)
        }
    }, [url]);


    console.log(isCloset, uriGlb)

    return (
        <div>
            {prod ?
                (isLoading && <CloseButton
                    id='close-modal-fitting'
                    type='button'
                    onClick={handleClose}
                >
                    <CgClose size={25} fill={colors.darkBlue} />
                </CloseButton>
                ) : (<Header _handleBack={_handleBack} _handleNext={_handleNext} />)
            }
            {/* {isLoading && <Loader handleClose={handleCloseLoading} />} */}
            <Container ref={ref}>
                {prod && (
                    <>
                        <FitHide />
                        <Measurements />
                        <LayoutPopup1 />
                        <LayoutPopup2 />
                    </>
                )}
                {isOpen && <Result />}
                {prod ?
                    <Iframe src={uriGlb} /> :
                    <ModelViewer uriGlb={uriGlb} />
                }
                {(isLoading && prod) || !prod ? (
                    <>
                        <Box>
                            {hide ? (
                                <Button
                                    onClick={handleHide}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Square width={25} height={25} fill="rgb(212, 215, 215)" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleHide}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Square width={25} height={25} fill={colors.darkBlue} />
                                </Button>
                            )}
                        </Box>
                        {hide && !uriGlb?.includes('avatar_info') && (
                            <MotionBox
                                initial={{
                                    opacity: 0,
                                    x: prod ? 8 : 0,
                                    y: prod ? 0 : 105
                                }}
                                animate={{
                                    opacity: 1,
                                    y: prod ? -8 : 90,
                                    transition: {
                                        duration: 3
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <Models
                                    models={models}
                                    onClick={handleSubmit}
                                    activeIndex={activeIndex}
                                />
                            </MotionBox>
                        )}
                    </>
                ) : null}
            </Container>
        </div>
    )
};

export default Step1;


























