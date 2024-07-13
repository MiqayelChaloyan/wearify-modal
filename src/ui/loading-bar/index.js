import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './styles.css';


const LoadingBar = React.memo(({ handleSubmit }) => {
    const [progress, setProgress] = useState(0);
    const timer = 100

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress >= timer ? timer : prevProgress + 1;
                if (nextProgress === timer) {
                    clearInterval(interval);
                    setTimeout(() => handleSubmit(), 1500)
                }
                return nextProgress;
            });
        }, 38);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='loading-bar'>
            <motion.div
                className='progress'
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>
    )
});

export default LoadingBar;