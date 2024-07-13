import { configureStore } from '@reduxjs/toolkit';

import popupSwitchReducer from './features/PopupState';
import stateSwitchReducer from './features/State';
import stateStepsReducer from './features/Steps';
import imageReducer from './features/ImagesState';
import ItemReducer from './features/ItemReducer';

const store = configureStore({
    reducer: {
        popup: popupSwitchReducer,
        data: stateSwitchReducer,
        steps: stateStepsReducer,
        imageReducer: imageReducer,
        ItemReducer: ItemReducer
    },
});

export default store;