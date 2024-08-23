import axios from "axios";
import { devserver, getAccessToken } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getPlansLoad: false,
  getPlansError: false,
  plans: [],
};

export const getPlans = createAsyncThunk("plan/getPlans", async () => {
  const accessToken = getAccessToken();
  const url = `${devserver}/plans`;
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
      const errMsg = error.response.data.message;
      throw new Error(errMsg);
    } else {
      throw new Error("An error occurred. ");
    }
  }
});

const planSlice = createSlice({
  name: "plan",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state) => {
        state.getPlansLoad = true;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.getPlansLoad = false;
        state.plans = action.payload.plans;
        state.getPlansError = false;
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.getPlansLoad = false;
        state.plans = [];
        state.getPlansError = action.error.message;
      });
  },
});

export default planSlice.reducer;
