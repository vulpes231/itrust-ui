import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import createAccountReducer from "../features/signupSlice";
import logoutReducer from "../features/logoutSlice";
import walletReducer from "../features/walletSlice";
import coinReducer from "../features/coinSlice";
import botReducer from "../features/botSlice";
import transactionReducer from "../features/transactionSlice";
import userReducer from "../features/userSlice";
import verifyReducer from "../features/verifySlice";
import planReducer from "../features/planSlice";
import docuReducer from "../features/docuSlice";
import tradeReducer from "../features/tradeSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    create: createAccountReducer,
    logout: logoutReducer,
    wallet: walletReducer,
    coin: coinReducer,
    bot: botReducer,
    transaction: transactionReducer,
    user: userReducer,
    verify: verifyReducer,
    plan: planReducer,
    docu: docuReducer,
    trade: tradeReducer,
  },
});

export default store;
