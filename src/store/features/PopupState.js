import { createSlice } from '@reduxjs/toolkit';

const popupSwitch = createSlice({
  name: 'Popup',
  initialState: { isPopupActive: false },
  reducers: {
    handleSwitchStatus: (state) => {
      state.isPopupActive = !state.isPopupActive;
    },
  },
});

export const { handleSwitchStatus } = popupSwitch.actions;
export default popupSwitch.reducer;
