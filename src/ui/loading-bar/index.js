import React, { useEffect, useState } from 'react';

import { Container, MotionBox } from './styles';


const LoadingBar = ({ handleSubmit }) => {
    const [progress, setProgress] = useState(0);
    const timer = 100

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress >= timer ? timer : prevProgress + 1;
                if (nextProgress === timer) {
                    clearInterval(interval);
                    setTimeout(() => handleSubmit(), 180000)
                }
                return nextProgress;
            });
        }, 38);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <MotionBox
                style={{ width: `${progress}%` }}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </Container>
    )
};

export default React.memo(LoadingBar);