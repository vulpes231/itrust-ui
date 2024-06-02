import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import createAccountReducer from "../features/signupSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    create: createAccountReducer,
  },
});

export default store;
