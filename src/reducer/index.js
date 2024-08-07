import { configureStore } from '@reduxjs/toolkit';

import popupSwitchReducer from './features/PopupState';
import stateSwitchReducer from './features/State';
import stateStepsReducer from './features/Steps';
import imageReducer from './features/ImagesState';
import ItemReducer from './features/ItemReducer';
import ResultReducer from './features/ResultReducer';
import LoaderCloSet from './features/LoaderCloSet';


const store = configureStore({
    reducer: {
        popup: popupSwitchReducer,
        data: stateSwitchReducer,
        steps: stateStepsReducer,
        imageReducer: imageReducer,
        ItemReducer: ItemReducer,
        result: ResultReducer,
        loaderCloSet: LoaderCloSet
    },
});

export default store;