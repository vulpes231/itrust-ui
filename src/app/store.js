import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import createAccountReducer from "../features/signupSlice";
import logoutReducer from "../features/logoutSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    create: createAccountReducer,
    logout: logoutReducer,
  },
});

export default store;
