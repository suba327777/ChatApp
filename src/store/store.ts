/* packages */
import { configureStore } from "@reduxjs/toolkit";
/* slice */
import { chatDataReducer } from "./slices/chatDataSlice";
import { userNameDataReducer } from "./slices/user/userNameDataSlice";
import { userIdDataReducer } from "./slices/user/userIdDataSlice";
import { imageUrlDataReducer } from "./slices/imageUrlDataSlice";
import { isChatCompletedReducer } from "./slices/isChatCompleted";

export const store = configureStore({
  reducer: {
    chatData: chatDataReducer,
    userNameData: userNameDataReducer,
    userIdData: userIdDataReducer,
    imageUrlData: imageUrlDataReducer,
    isChatCompleted: isChatCompletedReducer,
  },
});
