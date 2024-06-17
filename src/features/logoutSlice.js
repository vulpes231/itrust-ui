import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, liveserver } from "../constants";

const initialState = {
  loading: false,
  error: false,
  success: false,
};

export const logoutUser = createAsyncThunk("logout/logoutUser", async () => {
  let accessToken;
  const storedAccessToken = sessionStorage.getItem("accessToken");
  accessToken = storedAccessToken ? JSON.parse(storedAccessToken) : null;

  if (!accessToken) {
    throw new Error("No access token found");
  }
  // console.log(accessToken);
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

    sessionStorage.removeItem("accessToken");
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
});

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
