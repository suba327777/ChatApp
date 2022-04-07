/* packages */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* hooks */
import { useAppSelector } from "../../../hooks/useAppselector";
/* types */
import type { RootState } from "../../types/reduxType";

const initialState: string = "";

export const userNameDataSlice = createSlice({
  name: "userNameData",
  initialState,
  reducers: {
    setUserNameData: (state, action: PayloadAction<string>) => action.payload,
  },
});

// reducer
export const userNameDataReducer = userNameDataSlice.reducer;

// action
export const { setUserNameData } = userNameDataSlice.actions;

// selector
export const useUserNameDataSelector = () => {
  const userNameSelector = useAppSelector((state: RootState) => state.userNameData);
  return userNameSelector;
};
