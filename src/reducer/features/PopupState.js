import { createSlice } from '@reduxjs/toolkit';

const popupSwitch = createSlice({
  name: 'Popup',
  initialState: { isPopup1Active: false, isPopup2Active: false },
  reducers: {
    handleSwitchStatusPopup1: (state) => {
      state.isPopup1Active = !state.isPopup1Active;
    },
    handleSwitchStatusPopup2: (state) => {
      state.isPopup2Active = !state.isPopup2Active;
    }
  },
});

export const { handleSwitchStatusPopup1, handleSwitchStatusPopup2 } = popupSwitch.actions;
export default popupSwitch.reducer;
