import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { devserver, getAccessToken, liveserver } from "../constants";
import axios from "axios";

const initialState = {
  getUserTrnxLoading: false,
  getUserTrnxError: false,
  userTrnxs: [],
};

export const getUsertrnxs = createAsyncThunk(
  "transaction/getUserTrnxs",
  async () => {
    const url = `${liveserver}/transaction`;
    try {
      const accessToken = getAccessToken();
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${accessToken}`,
        },
      });
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
      } else {
        throw error;
      }
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    resetGetUser(state) {
      state.getUserTrnxError = false;
      state.getUserTrnxLoading = false;
      state.userTrnxs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsertrnxs.pending, (state) => {
        state.getUserTrnxLoading = true;
      })
      .addCase(getUsertrnxs.fulfilled, (state, action) => {
        state.getUserTrnxLoading = false;
        state.getUserTrnxError = false;
        state.userTrnxs = action.payload;
      })
      .addCase(getUsertrnxs.rejected, (state, action) => {
        state.getUserTrnxLoading = false;
        state.getUserTrnxError = action.error.message;
        state.userTrnxs = [];
      });
  },
});

export const { resetGetUser } = transactionSlice.actions;
export default transactionSlice.reducer;
