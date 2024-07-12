import { createSlice } from '@reduxjs/toolkit';
import MEASUREMENTS from 'constants/initialValues';

const State = createSlice({
  name: 'state',
  initialState: { ...MEASUREMENTS },
  reducers: {
    handleUpdateData: (state) => {
      state.isPopup1Active = !state.isPopup1Active;
    },
  },
});

export const { handleUpdateData } = State.actions;
export default State.reducer;
