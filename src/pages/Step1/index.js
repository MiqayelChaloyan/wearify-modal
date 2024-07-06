import React, { useRef, useState } from 'react';

import Square from 'icons/square';

import { motion } from 'framer-motion';

import Models from 'components/models';
import Header from 'components/header';
import ModelViewer from 'components/model-viewer';
import Measurements from 'components/measurements';
import LayoutPopup from 'components/popup1/layout';

import { colors } from 'constants';

import './styles.css';

// TODO
import { masurements, models } from 'utils/fakeApi';
//

const Step1 = React.memo(() => {
    const [uriGlb, setUriGlb] = useState(models[0].glbPath)
    const [hide, setHide] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const ref = useRef(null);

    const handleSubmit = (index) => {
        setUriGlb(models[index].glbPath)
        setActiveIndex(index)
    }

    const handleHide = () => setHide(!hide);

    return (
        <div>
            <Header />
            <div className='container-view' ref={ref}>
                {masurements && <Measurements />}
                <LayoutPopup />
                <ModelViewer uriGlb={uriGlb} />
                <div className='icon-button'>
                    {
                        hide ? (
                            <button className='button-right' onClick={handleHide} whiletap={{ scale: 0.95 }}>
                                <Square width={30} height={30} fill='rgb(212, 215, 215)' />
                            </button>
                        ) : (

                            <button className='button-right' onClick={handleHide} whiletap={{ scale: 0.95 }}>
                                <Square width={30} height={30} fill={colors.darkBlue} />
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


























