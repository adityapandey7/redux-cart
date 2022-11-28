import {createSlice} from "@reduxjs/toolkit";

const productInitial = {  list: [] };

export const productSlice = createSlice({
  name: "products",
  initialState: productInitial,
  reducers: {
    save(state, action) {
      state.list= action.payload;
    }
  }
});

export const productActions = productSlice.actions;

