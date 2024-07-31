import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, liveserver } from "../constants";

const initialState = {
  loading: false,
  error: false,
  success: false,
};

export const createAccount = createAsyncThunk(
  "create/createAccount",
  async (FormData) => {
    const url = `${liveserver}/signup`;
    try {
      const response = await axios.post(url, FormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMsg = error.response.data.message;
        throw new Error(errorMsg);
      } else {
        throw error;
      }
    }
  }
);

const createAccountSlice = createSlice({
  name: "create",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;

      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAccount.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.success = true;
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { reset } = createAccountSlice.actions;
export default createAccountSlice.reducer;
