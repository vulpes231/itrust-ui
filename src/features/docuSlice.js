import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getUserDocLoad: false,
  getUserDocError: false,
  userDocs: [],
};

export const getUserDocuments = createAsyncThunk(
  "docu/getUserDocuments",
  async () => {
    const accessToken = getAccessToken();
    const url = `${liveserver}/docs`;
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
  }
);

const docuSlice = createSlice({
  name: "docu",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getUserDocuments.pending, (state) => {
        state.getUserDocLoad = true;
      })
      .addCase(getUserDocuments.fulfilled, (state, action) => {
        state.getUserDocLoad = false;
        state.userDocs = action.payload.userDocuments;
        state.getUserDocError = false;
      })
      .addCase(getUserDocuments.rejected, (state, action) => {
        state.getUserDocLoad = false;
        state.userDocs = [];
        state.getUserDocError = action.error.message;
      });
  },
});

export default docuSlice.reducer;
