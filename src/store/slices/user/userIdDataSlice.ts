/* packages */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* hooks */
import { useAppSelector } from "../../../hooks/useAppselector";
/* types */
import type { RootState } from "../../types/reduxType";

const initialState: string = "";

export const userIdDataSlice = createSlice({
  name: "userIdData",
  initialState,
  reducers: {
    setUserIdData: (state, action: PayloadAction<string>) => action.payload,
  },
});

// reducer
export const userIdDataReducer = userIdDataSlice.reducer;

// action
export const { setUserIdData } = userIdDataSlice.actions;

// selector
export const useUserIdDataSelector = () => {
  const userIdDataSelector = useAppSelector((state: RootState) => state.userIdData);
  return userIdDataSelector;
};
