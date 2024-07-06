import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

import Popup from './index';


export default function LayoutPopup() {
    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Step1 />,
            <Step2/>
        ]);

    return (
        <Popup
            currentStepIndex={currentStepIndex}
            _handleBack={back}
            _handleNext={next}
        >
            {step}
        </Popup>
    )
};