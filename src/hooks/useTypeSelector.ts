import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducer/store";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
