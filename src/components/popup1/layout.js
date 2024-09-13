import { useMultistepForm } from 'hooks/useMultistepForm';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

import Popup from './index';

import { getClothesData } from 'utils/api';

import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';

import bodyTypes from 'constants/bodyTypes';


import { ref, set } from 'firebase/database';
import { database, storage } from 'firebaseDatabase';
import { uploadBytes, ref as sRef } from 'firebase/storage';

import { CLO_SET_URL, FAKE_API } from 'constants/data';


// // TODO
// const ID = 2;
// //




export default function LayoutPopup() {
    const element = document.getElementById('web-modal');
    const productId = element.getAttribute('data-product-id');
    // const productId = '8211036766361';

    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Step1 />,
            <Step2 />
        ]);

    const { isFemale, height, weight, shape } = useSelector((state) => state.data);

    // const { images } = useSelector((state) => state.imageReducer);
    const dispatch = useDispatch();

    // const userId = images[0]?.id;

    const _handleNext = async () => {
        if (isFemale && height && weight) {

            // const closetItems = await getClothesData(0); // isFemale convert after
            const closetItems = FAKE_API;

            const [item] = closetItems?.filter(elem => elem.id == productId);

            let url = item?.closet_url;

            if (item?.is_closet) {
                const genderParams = isFemale ? bodyTypes.female : bodyTypes.male;

                // TODO
                // Remove After
                let closetIsFemale = 1;

                if (item.id === '8211036766361') {
                    closetIsFemale = 1;
                }
                if (item.id === '8211137200281') {
                    closetIsFemale = 0;
                }

                url += `?&avatar_info=${closetIsFemale}_${0}_${height}_${weight}_${shape}&ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none`;
                // //////

                // url = CLO_SET_URL + `?&avatar_info=${1}_${0}_${height}_${weight}_${genderParams.shapeType.TRIANGLE}&ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none`;
            }

            dispatch(handleUpdateData({ url, isCloset: item?.is_closet }));

        }
        return next();
    };

    return (
        <Popup
            currentStepIndex={currentStepIndex}
            _handleBack={back}
            _handleNext={_handleNext}
        >
            {step}
        </Popup>
    )
};