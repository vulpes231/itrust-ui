import axios from "axios";
import { devserver, getAccessToken } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getUserLoading: false,
  getUserError: false,
  user: null,
  updateUserLoading: false,
  updateUserError: false,
  userUpdated: false,
  verifyLoading: false,
  verifyError: false,
  verified: false,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  const accessToken = getAccessToken();
  const url = `${devserver}/user`;
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      const errMsg = error.response.message.data;
      throw new Error(errMsg);
    } else {
      throw new Error("An error occurred. ");
    }
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (formData) => {
    const accessToken = getAccessToken();
    const url = `${devserver}/user`;
    try {
      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        const errMsg = error.response.message.data;
        throw new Error(errMsg);
      } else {
        throw new Error("An error occurred. ");
      }
    }
  }
);

export const verifyAccount = createAsyncThunk(
  "user/verifyAccount",
  async (formData) => {
    const accessToken = getAccessToken();
    const url = `${devserver}/user/verify`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        const errMsg = error.response.message.data;
        throw new Error(errMsg);
      } else {
        throw new Error("An error occurred. ");
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUpdateUser(state) {
      state.updateUserError = false;
      state.userUpdated = false;
      state.updateUserLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.getUserLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.getUserLoading = false;
        state.user = action.payload.user;
        state.getUserError = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.getUserLoading = false;
        state.user = null;
        state.getUserError = action.error.message;
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.updateUserLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.updateUserLoading = false;
        state.userUpdated = true;
        state.updateUserError = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserLoading = false;
        state.userUpdated = false;
        state.updateUserError = action.error.message;
      });

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

export default userSlice.reducer;
export const { resetUpdateUser } = userSlice.actions;
