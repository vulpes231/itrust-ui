import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
    },
  },
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;
