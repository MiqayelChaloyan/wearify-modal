import { useMultistepForm } from 'hooks/useMultistepForm';

import Popup from './index';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import { getClothesData } from 'utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateData } from 'reducer/features/State';
import bodyTypes from 'constants/bodyTypes';


import { ref, set } from 'firebase/database';
import { database, storage } from 'firebaseDatabase';
import { uploadBytes, ref as sRef } from 'firebase/storage';


// TODO
const ID = 2;
//


export default function LayoutPopup() {
    const { currentStepIndex, step, back, next } =
        useMultistepForm([
            <Step3 />,
            <Step4 />,
            <Step5 />
        ]);

    const { isFemale, height, weight } = useSelector((state) => state.data);
    const { images } = useSelector((state) => state.imageReducer);

    const userId = images[0]?.id;

    const dispatch = useDispatch();


    const _handleNext = async () => {
        if (currentStepIndex === 1) {

            const closetItems = await getClothesData(0); // isFemale convert after

            const [item] = closetItems?.data.filter(elem => elem.id === ID);
            let url = item?.closet_url;
            
            if (item?.is_closet) {
                const genderParams = isFemale ? bodyTypes.female : bodyTypes.male;
                url += `?&avatar_info=${1}_${0}_${height}_${weight}_${genderParams.shapeType.TRIANGLE}&ui_capture=false&ui_logo=false&ui_like=false&ui_shopping_bag=false`;
            }

            dispatch(handleUpdateData({ url, isCloset: item?.is_closet }));

            ///////

            try {
                const response = await fetch(images[0].source);

                const blob = await response.blob();
                const newFile = new File([blob], 'example.png', { type: blob.type });

                const storageRef = sRef(storage, `WEB/${userId}/avatar_${userId}.png`);

                uploadBytes(storageRef, newFile);
            } catch (_) {
                console.log('File upload error', _)
            }

            set(ref(database, 'avatars/' + userId), {
                isLoading: true,
                isAvatarError: false,
            }).catch(err => console.log(err));


            set(ref(database, 'new/' + userId), {
                closetURL: url,
                status: 'new',
                presetBackground: '033',
                presetModel: '055',
            }).catch(err => console.log(err))
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