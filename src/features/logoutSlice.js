import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

const initialState = {
  logoutLoading: false,
  logoutError: false,
  logoutSuccess: false,
};

export const logoutUser = createAsyncThunk("logout/logoutUser", async () => {
  const accessToken = getAccessToken();
  const url = `${liveserver}/logout`;
  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
});

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    reset(state) {
      state.logoutLoading = false;
      state.logoutError = false;
      state.logoutSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.logoutLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logoutLoading = false;
        state.logoutError = false;
        state.logoutSuccess = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logoutLoading = false;
        state.logoutError = action.error.message;
        state.logoutSuccess = false;
      });
  },
});

export const { reset } = logoutSlice.actions;
export default logoutSlice.reducer;
