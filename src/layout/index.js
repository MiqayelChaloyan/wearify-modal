import { useEffect } from 'react';


import Step1 from 'pages/Step1';
import { useMultistepForm } from 'hooks/useMultistepForm';
import Modal from 'components/modal';
import SplashScreen from 'pages/SplashScreen';
import useTheme from 'hooks/useTheme';
import colors from 'themes/colors';

export default function Layout() {
    const { setTheme } = useTheme();

    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <SplashScreen />,
            <Step1/>
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
        >
            {step}
        </Modal>
    )
};