import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { handleAddItem } from 'reducer/features/ItemReducer';

import Square from 'icons/square';

import { motion } from 'framer-motion';

import Models from 'components/models';
import Header from 'components/header';
import Iframe from 'components/iframe';
import Result from 'components/result';
import ModelViewer from 'components/model-viewer';
import Measurements from 'components/measurements';
import LayoutPopup1 from 'components/popup1/layout';
import LayoutPopup2 from 'components/popup2/layout';

import colors from 'themes/colors';

import './styles.css';

// TODO
import { masurements } from 'utils/fakeApi';
import COMBINED_MODELS from 'constants/models';
//

const Step1 = React.memo(({
    _handleBack,
    _handleNext
}) => {
    const { isOpen } = useSelector((state) => state.result);

    const dispatch = useDispatch();
    const models = masurements ? COMBINED_MODELS.sportWearing : COMBINED_MODELS.sneakers;

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

    return (
        <div>
            <Header _handleBack={_handleBack} _handleNext={_handleNext} />
            <div className='container-view' ref={ref}>
                {masurements && <Measurements />}
                <LayoutPopup1 />
                <LayoutPopup2 />
                {isOpen && <Result />}
                {masurements ?
                    <Iframe src={uriGlb} /> :
                    <ModelViewer uriGlb={uriGlb} />}
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
                                x: 0,
                                y: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                y: -20,
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
            </div>
        </div>
    )
});

export default Step1;


























