import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { coins } from "../constants";

const initialState = {
  loading: false,
  error: false,
  success: false,
  coinData: [],
};

export const getCoinData = createAsyncThunk("coin/getCoinData", async () => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins
    .map((coin) => coin.id)
    .join(",")}&vs_currencies=usd&include_24hr_change=true`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Extracting data from response
    const data = response.data;

    // Formatting data to match initialState structure
    const formattedData = coins.map((coin) => ({
      id: coin.id,
      name: coin.name,
      price: data[coin.id].usd,
      change: data[coin.id].usd_24h_change,
      isPositive: data[coin.id].usd_24h_change > 0,
      icon: coin.icon,
      abbr: coin.abbr,
    }));

    // console.log(response.data);
    return formattedData;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside of 2xx range
      const errorMsg = error.response.data.message;
      throw new Error(errorMsg);
    } else {
      // Something went wrong in making the request
      throw error;
    }
  }
});

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.coinData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinData.pending, (state) => {
        state.loading = true;
        state.error = false; // Reset error state on pending
      })
      .addCase(getCoinData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.coinData = action.payload;
      })
      .addCase(getCoinData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
        state.coinData = [];
      });
  },
});

export const { reset } = coinSlice.actions;
export default coinSlice.reducer;
