/* packages */
import { TypedUseSelectorHook, useSelector } from "react-redux";
/* type */
import type { RootState } from "../store/types/reduxType";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
