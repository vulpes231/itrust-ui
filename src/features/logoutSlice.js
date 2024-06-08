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

export const logoutUser = createAsyncThunk(
  "logout/logoutUser",
  async (_, { getState }) => {
    const url = `${liveserver}/logout`;
    const accessTokenString = sessionStorage.getItem("accessToken");
    const accessToken = accessTokenString
      ? JSON.parse(accessTokenString)
      : null;

    // console.log(accessToken);
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

const logoutSlice = createSlice({
  name: "logout",
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
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.success = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export const { reset } = logoutSlice.actions;
export default logoutSlice.reducer;
