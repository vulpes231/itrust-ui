import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

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
  getBalLoading: false,
  getBalError: false,
  userBalance: false,
  swapLoading: false,
  swapError: false,
  swapped: false,
};

export const getUserBalance = createAsyncThunk(
  "wallet/getUserBalance",
  async () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      throw new Error("No access token found");
    }

    try {
      const url = `${liveserver}/account/balance`;
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
        throw error;
      }
    }
  }
);

export const getUserAccount = createAsyncThunk(
  "wallet/getUserAccount",
  async () => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      throw new Error("No access token found");
    }

    try {
      const url = `${liveserver}/account`;
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
        throw error;
      }
    }
  }
);

export const deposit = createAsyncThunk("wallet/deposit", async (formData) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    throw new Error("No access token found");
  }

  try {
    const url = `${liveserver}/account/deposit`;
    const response = await axios.post(url, formData, {
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
      throw error;
    }
  }
});

export const withdraw = createAsyncThunk(
  "wallet/withdraw",
  async (formData) => {
    const accessToken = getAccessToken();

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
      // console.log(response.data);
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
export const swap = createAsyncThunk("wallet/swap", async (formData) => {
  const accessToken = getAccessToken();

  if (!accessToken) {
    throw new Error("No access token found");
  }

  try {
    const url = `${liveserver}/account/swap`;
    const response = await axios.post(url, formData, {
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
      throw error;
    }
  }
});

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
    resetBalance(state) {
      state.getBalLoading = false;
      state.getBalError = false;
      state.userBalance = false;
    },
    resetSwap(state) {
      state.swapLoading = false;
      state.swapError = false;
      state.swapped = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.pending, (state) => {
        state.getAccountLoading = true;
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        state.getAccountLoading = false;
        state.getAccountError = false;
        state.userAccounts = action.payload;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
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
    builder
      .addCase(getUserBalance.pending, (state) => {
        state.getBalLoading = true;
      })
      .addCase(getUserBalance.fulfilled, (state, action) => {
        state.getBalLoading = false;
        state.getBalError = false;
        state.userBalance = action.payload;
      })
      .addCase(getUserBalance.rejected, (state, action) => {
        state.getBalLoading = false;
        state.getBalError = action.error.message;
        state.userBalance = false;
      });

    builder
      .addCase(swap.pending, (state) => {
        state.swapLoading = true;
      })
      .addCase(swap.fulfilled, (state) => {
        state.swapLoading = false;
        state.swapped = true;
        state.swapError = false;
      })
      .addCase(swap.rejected, (state, action) => {
        state.swapLoading = false;
        state.swapped = false;
        state.swapError = action.error.message;
      });
  },
});

export const { resetGetAccount, resetDeposit, resetWithdraw } =
  walletSlice.actions;
export default walletSlice.reducer;
