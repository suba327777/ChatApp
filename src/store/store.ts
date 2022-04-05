/* packages */
import { configureStore } from "@reduxjs/toolkit";
/* slice */
import { chatDataReducer } from "./slices/chatDataSlice";
import { userNameDataReducer } from "./slices/userNameDataSlice";

export const store = configureStore({
  reducer: {
    chatData: chatDataReducer,
    userNameData: userNameDataReducer,
  },
});
