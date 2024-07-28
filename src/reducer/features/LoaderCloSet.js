import { createSlice } from '@reduxjs/toolkit';

const LoaderCloSet = createSlice({
    name: 'Clo-Set',
    initialState: { isLoading: false},
    reducers: {
        handleSwitchLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
    },
});

export const { handleSwitchLoading } = LoaderCloSet.actions;
export default LoaderCloSet.reducer;
