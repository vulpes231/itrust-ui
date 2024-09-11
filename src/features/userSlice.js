import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getUserLoading: false,
  getUserError: false,
  user: null,
  updateUserLoading: false,
  updateUserError: false,
  userUpdated: false,
  changeLoading: false,
  changeError: false,
  passwordChanged: false,
};

export const getUser = createAsyncThunk("user/getUser", async () => {
  const accessToken = getAccessToken();
  const url = `${liveserver}/user`;
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
      const errMsg = error.response.data.message;
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
    const url = `${liveserver}/user`;
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
        const errMsg = error.response.data.message;
        throw new Error(errMsg);
      } else {
        throw new Error("An error occurred. ");
      }
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (formData) => {
    const accessToken = getAccessToken();
    const url = `${liveserver}/user/change-password`;
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
        const errMsg = error.response.data.message;
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
    resetChangePass(state) {
      state.changeError = false;
      state.changeLoading = false;
      state.passwordChanged = false;
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
      .addCase(changePassword.pending, (state) => {
        state.changeLoading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changeLoading = false;
        state.passwordChanged = true;
        state.changeError = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changeLoading = false;
        state.passwordChanged = false;
        state.changeError = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { resetUpdateUser, resetChangePass } = userSlice.actions;
