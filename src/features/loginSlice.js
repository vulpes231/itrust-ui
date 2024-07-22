import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, liveserver } from "../constants";

const initialState = {
  loading: false,
  error: false,
  success: false,
  accessToken: null,
  username: null,
};

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (FormData) => {
    console.log(FormData);
    const url = `${devserver}/signin`;
    try {
      const response = await axios.post(url, FormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
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

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.accessToken = null;
      state.error = false;
      state.success = false;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.accessToken = action.payload.userObj.accessToken;
        state.username = action.payload.userObj.username;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        state.accessToken = null;
        state.username = null;
      });
  },
});

export const { reset } = loginSlice.actions;
export default loginSlice.reducer;
