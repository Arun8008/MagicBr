import { createSlice } from "@reduxjs/toolkit";
import { Details } from "../ArrayofObject/Objects";

const Collections = createSlice({
  name: "sample",
  initialState: {
    Building: Details,
    Home: []
  },
  reducers: {
    Home: (state, action) => {
      state.Home = action.payload;
    }
  }
});

export const { Building, Home } = Collections.actions;
export default Collections.reducer;
