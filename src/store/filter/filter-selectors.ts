import { RootState } from "../root-reducer";

export const selectActiveFilter = (state: RootState) => state.filter;