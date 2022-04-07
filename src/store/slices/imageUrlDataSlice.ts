/* packages */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* hooks */
import { useAppSelector } from "../../hooks/useAppselector";
/* types */
import type { RootState } from "../types/reduxType";

const initialState: string = "";

export const imageUrlDataSlice = createSlice({
  name: "imageUrlDataSlice",
  initialState,
  reducers: {
    setImageUrlData: (state, action: PayloadAction<string>) => action.payload,
  },
});

// reducer
export const imageUrlDataReducer = imageUrlDataSlice.reducer;

// action
export const { setImageUrlData } = imageUrlDataSlice.actions;

// selector
export const useImageUrlDataSelector = () => {
  const imageUrlSelector = useAppSelector((state: RootState) => state.imageUrlData);
  return imageUrlSelector;
};
