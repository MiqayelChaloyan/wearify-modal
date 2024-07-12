import { configureStore } from '@reduxjs/toolkit';

import popupSwitchReducer from './features/PopupState';

const store = configureStore({
    reducer: {
        popup: popupSwitchReducer
    },
});

export default store;