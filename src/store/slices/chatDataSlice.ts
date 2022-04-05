/* packages */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* hooks */
import { useAppSelector } from "../../hooks/useAppselector";
/* types */
import { chatData } from "../../types/chatData";
import type { RootState } from "../types/reduxType";

const initialState: chatData[] = [];

export const chatDataSlice = createSlice({
  name: "chatData",
  initialState,
  reducers: {
    setChatData: (state, action: PayloadAction<chatData[]>) => action.payload,
  },
});

// reducer
export const chatDataReducer = chatDataSlice.reducer;

// action
export const { setChatData } = chatDataSlice.actions;

// selector
export const useChatDataSelector = () => {
  const chatDataSelector = useAppSelector((state: RootState) => state.chatData);
  return chatDataSelector;
};
