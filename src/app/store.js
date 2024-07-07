import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import createAccountReducer from "../features/signupSlice";
import logoutReducer from "../features/logoutSlice";
import walletReducer from "../features/walletSlice";
import coinReducer from "../features/coinSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    create: createAccountReducer,
    logout: logoutReducer,
    wallet: walletReducer,
    coin: coinReducer,
  },
});

export default store;
