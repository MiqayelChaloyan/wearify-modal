import { createSlice } from '@reduxjs/toolkit';

const ItemReducer = createSlice({
  name: 'item',
  initialState: { item: null },
  reducers: {
    handleAddItem: (state, action) => {
      console.log( action.payload)
      state.item = action.payload;
    },
  },
});

export const { handleAddItem } = ItemReducer.actions;
export default ItemReducer.reducer;
