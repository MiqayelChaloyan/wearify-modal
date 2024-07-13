import { configureStore } from '@reduxjs/toolkit';

import popupSwitchReducer from './features/PopupState';
import stateSwitchReducer from './features/State';
import stateStepsReducer from './features/Steps';

const store = configureStore({
    reducer: {
        popup: popupSwitchReducer,
        data: stateSwitchReducer,
        steps: stateStepsReducer,
    },
});

export default store;