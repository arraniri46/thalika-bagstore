import { createSlice } from "@reduxjs/toolkit";
import { products } from "data/products";

const initialState = {
  data: products,
};

const productsSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    getProductById: (state, action) => {
      state.data = state.data.find((item) => item.id === action.payload);
    },
    addProducts: (state, action) => {
      state.data.push(action.payload);
    },

    deleteProducts: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload);
    },

    updateProducts: (state, action) => {
      const { id, newProducts } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      state.data[index] = newProducts;
    },
  },
});

export const { getProductById, addProducts, deleteProducts, updateProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
