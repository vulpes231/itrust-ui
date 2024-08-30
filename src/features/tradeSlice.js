import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

const initialState = {
  getTradeLoading: false,
  getTradeError: false,
  trades: false,
};

export const getUserTrades = createAsyncThunk(
  "logout/getUserTrades",
  async () => {
    const accessToken = getAccessToken();
    const url = `${liveserver}/trade`;
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
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

const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {
    resetTrade(state) {
      state.getTradeLoading = false;
      state.getTradeError = false;
      state.trades = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserTrades.pending, (state) => {
        state.getTradeLoading = true;
      })
      .addCase(getUserTrades.fulfilled, (state, action) => {
        state.getTradeLoading = false;
        state.getTradeError = false;
        state.trades = action.payload;
      })
      .addCase(getUserTrades.rejected, (state, action) => {
        state.getTradeLoading = false;
        state.getTradeError = action.error.message;
        state.trades = false;
      });
  },
});

export const { resetTrade } = tradeSlice.actions;
export default tradeSlice.reducer;
