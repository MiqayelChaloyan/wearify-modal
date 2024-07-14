import { createSlice } from '@reduxjs/toolkit';

const ResultSwitch = createSlice({
    name: 'result',
    initialState: { isLoading: false, isOpen: false },
    reducers: {
        handleSwitchResultLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        handleSwitchPopup: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
});

export const { handleSwitchResultLoading, handleSwitchPopup } = ResultSwitch.actions;
export default ResultSwitch.reducer;
