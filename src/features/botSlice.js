import axios from "axios";
import { devserver, getAccessToken, liveserver } from "../constants";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  getBotLoading: false,
  getBotError: false,
  bots: [],
  getUserBotLoading: false,
  getUserBotError: false,
  userBots: [],
  activateError: false,
  activateLoading: false,
  activated: false,
};

export const getAllBots = createAsyncThunk("bot/getAllBots", async () => {
  const url = `${liveserver}/bot`;
  try {
    const accessToken = getAccessToken();
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
      throw error;
    }
  }
});

export const getUserBots = createAsyncThunk("bot/getUserBots", async () => {
  const url = `${liveserver}/bot/userbots`;
  try {
    const accessToken = getAccessToken();
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
      throw error;
    }
  }
});

export const activateNewBot = createAsyncThunk(
  "bot/activateNewBot",
  async (formData) => {
    const url = `${liveserver}/bot`;
    try {
      const accessToken = getAccessToken();
      const response = await axios.put(url, formData, {
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

const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    resetGetBot(state) {
      state.getBotLoading = false;
      state.getBotError = false;
      state.bots = [];
    },
    resetGetUserBot(state) {
      state.getUserBotLoading = false;
      state.getUserBotError = false;
      state.userBots = [];
    },
    resetActivate(state) {
      state.activateError = false;
      state.activateLoading = false;
      state.activated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBots.pending, (state) => {
        state.getBotLoading = true;
      })
      .addCase(getAllBots.fulfilled, (state, action) => {
        state.getBotLoading = false;
        state.getBotError = false;
        state.bots = action.payload;
      })
      .addCase(getAllBots.rejected, (state, action) => {
        state.getBotLoading = false;
        state.getBotError = action.error.message;
        state.bots = [];
      });

    builder
      .addCase(getUserBots.pending, (state) => {
        state.getUserBotLoading = true;
      })
      .addCase(getUserBots.fulfilled, (state, action) => {
        state.getUserBotLoading = false;
        state.getUserBotError = false;
        state.userBots = action.payload;
      })
      .addCase(getUserBots.rejected, (state, action) => {
        state.getUserBotLoading = false;
        state.getUserBotError = action.error.message;
        state.userBots = [];
      });
    builder
      .addCase(activateNewBot.pending, (state) => {
        state.activateLoading = true;
      })
      .addCase(activateNewBot.fulfilled, (state, action) => {
        state.activateLoading = false;
        state.activateError = false;
        state.activated = true;
      })
      .addCase(activateNewBot.rejected, (state, action) => {
        state.activateLoading = false;
        state.activateError = action.error.message;
        state.activated = false;
      });
  },
});

export const { resetGetBot } = botSlice.actions;
export default botSlice.reducer;
