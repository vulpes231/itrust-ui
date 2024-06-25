import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, liveserver } from "../constants";

const initialState = {
  getAccountLoading: false,
  getAccountError: false,
  userAccounts: [],
  depositError: false,
  depositSuccess: false,
  depositLoading: false,
  withdrawError: false,
  withdrawSuccess: false,
  withdrawLoading: false,
};

export const getUserAccounts = createAsyncThunk(
  "wallet/getUserAccounts",
  async () => {
    let accessToken;
    const storedAccessToken = sessionStorage.getItem("accessToken");
    accessToken = storedAccessToken ? JSON.parse(storedAccessToken) : null;

    if (!accessToken) {
      throw new Error("No access token found");
    }

    try {
      const url = `${devserver}/account`;
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
        throw error;
      }
    }
  }
);

export const deposit = createAsyncThunk("wallet/deposit", async (formData) => {
  let accessToken;
  const storedAccessToken = sessionStorage.getItem("accessToken");
  accessToken = storedAccessToken ? JSON.parse(storedAccessToken) : null;

  if (!accessToken) {
    throw new Error("No access token found");
  }

  try {
    const url = `${devserver}/account/deposit`;
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
      throw error;
    }
  }
});

export const withdraw = createAsyncThunk(
  "wallet/withdraw",
  async (formData) => {
    let accessToken;
    const storedAccessToken = sessionStorage.getItem("accessToken");
    accessToken = storedAccessToken ? JSON.parse(storedAccessToken) : null;

    if (!accessToken) {
      throw new Error("No access token found");
    }

    try {
      const url = `${devserver}/account/withdrawal`;
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
        throw error;
      }
    }
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    resetGetAccount(state) {
      state.getAccountLoading = false;
      state.getAccountError = false;
      state.userAccounts = [];
    },
    resetDeposit(state) {
      state.depositError = false;
      state.depositLoading = false;
      state.depositSuccess = false;
    },
    resetWithdraw(state) {
      state.withdrawError = false;
      state.withdrawLoading = false;
      state.withdrawSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccounts.pending, (state) => {
        state.getAccountLoading = true;
      })
      .addCase(getUserAccounts.fulfilled, (state, action) => {
        state.getAccountLoading = false;
        state.getAccountError = false;
        state.userAccounts = action.payload;
      })
      .addCase(getUserAccounts.rejected, (state, action) => {
        state.getAccountLoading = false;
        state.getAccountError = action.error.message;
        state.userAccounts = [];
      });

    builder
      .addCase(deposit.pending, (state) => {
        state.depositLoading = true;
      })
      .addCase(deposit.fulfilled, (state) => {
        state.depositLoading = false;
        state.depositSuccess = true;
        state.depositError = false;
      })
      .addCase(deposit.rejected, (state, action) => {
        state.depositLoading = false;
        state.depositSuccess = false;
        state.depositError = action.error.message;
      });
    builder
      .addCase(withdraw.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(withdraw.fulfilled, (state) => {
        state.withdrawLoading = false;
        state.withdrawSuccess = true;
        state.withdrawError = false;
      })
      .addCase(withdraw.rejected, (state, action) => {
        state.withdrawLoading = false;
        state.withdrawSuccess = false;
        state.withdrawError = action.error.message;
      });
  },
});

export const { resetGetAccount, resetDeposit, resetWithdraw } =
  walletSlice.actions;
export default walletSlice.reducer;
