/* packages */
import { useDispatch } from "react-redux";
/* type */
import type { AppDispatch } from "../store/types/reduxType";

export const useAppDispatch = () => useDispatch<AppDispatch>();
