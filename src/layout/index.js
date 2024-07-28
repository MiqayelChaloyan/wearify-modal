import { useEffect } from 'react';
import { useMultistepForm } from 'hooks/useMultistepForm';

import SplashScreen from 'pages/SplashScreen';
import Step1 from 'pages/Step1';
import ScanQR from 'pages/ScanQR';

import Modal from 'components/modal';

import useTheme from 'hooks/useTheme';
import colors from 'themes/colors';


export default function Layout() {
    const { setTheme } = useTheme();

    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <SplashScreen />,
            <Step1 />,
            <ScanQR />
        ]);

    useEffect(() => {
        let isMounted = true;

        const intervalId = setTimeout(() => {
            if (isMounted) {
                setTheme(colors.lightGray);
                next();
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearTimeout(intervalId);
        };
    }, []);

    return (
        <Modal
            currentStepIndex={currentStepIndex}
            _handleBack={back}
            _handleNext={next}
        >
            {step}
        </Modal>
    )
};