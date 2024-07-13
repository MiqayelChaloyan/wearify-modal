import { createSlice } from '@reduxjs/toolkit';
import MEASUREMENTS from 'constants/initialValues';

const State = createSlice({
  name: 'data',
  initialState: { ...MEASUREMENTS },
  reducers: {
    handleUpdateData: (state, action) => {
      return { ...state, ...action.payload };
    },
    handleAddImage: (state, action) => {
      return {
        ...state,
        uploadImages: [...state.uploadImages, ...action.payload.uploadImages],
      };
    },
  },
});

export const { handleUpdateData, handleAddImage } = State.actions;
export default State.reducer;
