import React, { useRef, useState } from 'react';

import Square from 'icons/square';

import { motion } from 'framer-motion';

import Models from 'components/models';
import Header from 'components/header';
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
    const [uriGlb, setUriGlb] = useState(COMBINED_MODELS.sneakers[0].glbPath)
    const [hide, setHide] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const ref = useRef(null);

    const handleSubmit = (index) => {
        setUriGlb(COMBINED_MODELS.sneakers[index].glbPath)
        setActiveIndex(index)
    }

    const handleHide = () => setHide(!hide);

    return (
        <div>
            <Header _handleBack={_handleBack} _handleNext={_handleNext} />
            <div className='container-view' ref={ref}>
                {masurements && <Measurements />}
                <LayoutPopup1 />
                <LayoutPopup2 />
                <ModelViewer uriGlb={uriGlb} />
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
                                models={COMBINED_MODELS.sneakers}
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


























