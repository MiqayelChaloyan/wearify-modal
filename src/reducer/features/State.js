import { createSlice } from '@reduxjs/toolkit';
import MEASUREMENTS from 'constants/initialValues';

const State = createSlice({
  name: 'data',
  initialState: { ...MEASUREMENTS },
  reducers: {
    handleUpdateData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleUpdateData } = State.actions;
export default State.reducer;
