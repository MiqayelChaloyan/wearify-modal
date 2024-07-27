import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleAddItem } from 'reducer/features/ItemReducer';

import Square from 'icons/square';

import { motion } from 'framer-motion';

import Loader from 'components/loader';
import Models from 'components/models';
import Header from 'components/header';
import Iframe from 'components/iframe';
import Result from 'components/result';
import ModelViewer from 'components/model-viewer';
import Measurements from 'components/measurements';
import LayoutPopup1 from 'components/popup1/layout';
import LayoutPopup2 from 'components/popup2/layout';
import Example from 'components/example';

import colors from 'themes/colors';

import './styles.css';

// TODO
import { productId } from 'utils/fakeApi';
import COMBINED_MODELS from 'constants/models';
import { CgClose } from 'react-icons/cg';
import { handleSwitchPopup, handleSwitchResultLoading } from 'reducer/features/ResultReducer';
//

const Step1 = React.memo(({
    _handleBack,
    _handleNext
}) => {
    const { isOpen } = useSelector((state) => state.result);
    const { isLoading } = useSelector(state => state.loaderCloSet);

    const dispatch = useDispatch();
    const models = productId ? COMBINED_MODELS.sportWearing : COMBINED_MODELS.sneakers;

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

    return (
        <div>
            {productId ?
                (<button
                    id='close-modal-fitting'
                    type='button'
                    className='close-modal-fitting'
                    onClick={handleClose}
                >
                    <CgClose size={25} fill={colors.darkBlue} />
                </button>) : (<Header _handleBack={_handleBack} _handleNext={_handleNext} />)
            }
            {/* {isLoading && <Loader handleClose={handleCloseLoading} />} */}
            <div className='container-view' ref={ref}>
                {productId && (
                    <>
                        {isLoading && <Example />}
                        <Measurements />
                        <LayoutPopup1 />
                        <LayoutPopup2 />
                    </>
                )}
                {isOpen && <Result />}
                {productId ?
                    <Iframe src={uriGlb} /> :
                    <ModelViewer uriGlb={uriGlb} />
                }
                {isLoading &&
                    <>
                        <div className='icon-button'>
                            {
                                hide ? (
                                    <button className='button-right' onClick={handleHide} whiletap={{ scale: 0.95 }}>
                                        <Square width={25} height={25} fill='rgb(212, 215, 215)' />
                                    </button>
                                ) : (

                                    <button className='button-right' onClick={handleHide} whiletap={{ scale: 0.95 }}>
                                        <Square width={25} height={25} fill={colors.darkBlue} />
                                    </button>
                                )
                            }
                        </div>
                        {
                            hide && (
                                <motion.div className='models'
                                    initial={{
                                        opacity: 0,
                                        x: productId ? 8 : 0,
                                        y: productId ? 0 : 210
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: productId ? -8 : 200,
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
                                </motion.div>
                            )
                        }
                    </>}
            </div>
        </div>
    )
});

export default Step1;


























