/* packages */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* hooks */
import { useAppSelector } from "../../hooks/useAppselector";
/* types */
import type { RootState } from "../types/reduxType";

const initialState: boolean = false;

export const isChatCompletedSlice = createSlice({
  name: "isChatCompletedSlice",
  initialState,
  reducers: {
    setIsChatCompleted: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

// reducer
export const isChatCompletedReducer = isChatCompletedSlice.reducer;

// action
export const { setIsChatCompleted } = isChatCompletedSlice.actions;

// selector
export const useIsChatCompletedSelector = () => {
  const isChatCompletedSelector = useAppSelector((state: RootState) => state.isChatCompleted);
  return isChatCompletedSelector;
};
