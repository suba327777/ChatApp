/* packages */
import { configureStore } from "@reduxjs/toolkit";
/* slice */
import { chatDataReducer } from "./slices/chatDataSlice";

export const store = configureStore({
  reducer: {
    chatData: chatDataReducer,
  },
});
