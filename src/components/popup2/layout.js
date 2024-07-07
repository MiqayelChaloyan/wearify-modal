import { useMultistepForm } from 'hooks/useMultistepForm';

import Popup from './index';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';


export default function LayoutPopup() {
    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Step3 />,
            <Step4 />
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