import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './styles.css';


const LoadingBar = React.memo(({ handleSubmit }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress >= 100 ? 100 : prevProgress + 1;
                if (nextProgress === 100) {
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