import axios from "axios";
import { devserver, getAccessToken } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  verifyLoading: false,
  verifyError: false,
  verified: false,
};

export const verifyAccount = createAsyncThunk(
  "verify/verifyAccount",
  async (formData) => {
    console.log(formData);
    const accessToken = getAccessToken();
    const url = `${devserver}/verify`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
  }
);

const verifySlice = createSlice({
  name: "verify",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(verifyAccount.pending, (state) => {
        state.verifyLoading = true;
      })
      .addCase(verifyAccount.fulfilled, (state) => {
        state.verifyLoading = false;
        state.verified = true;
        state.verifyError = false;
      })
      .addCase(verifyAccount.rejected, (state, action) => {
        state.verifyLoading = false;
        state.verified = false;
        state.verifyError = action.error.message;
      });
  },
});

export default verifySlice.reducer;
