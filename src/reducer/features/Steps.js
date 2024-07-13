import { createSlice } from '@reduxjs/toolkit';

const StepsSwitch = createSlice({
    name: 'steps',
    initialState: { isFinish: false  },
    reducers: {
        handleNext: (state) => {
            state.isFinish = !state.isFinish;
        }
    },
});

export const { handleNext } = StepsSwitch.actions;
export default StepsSwitch.reducer;
