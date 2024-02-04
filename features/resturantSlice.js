import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_desc: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;

export const selectResturant = (state) => state.basket.items;

export default resturantSlice.reducer;
