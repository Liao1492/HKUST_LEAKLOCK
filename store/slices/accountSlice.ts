import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface IAccount {
  name: string;
  password: string;
  id: string;
}

const initialState: IAccount[] = [];
interface IAccountPayload {
  name: string;
  password: string;
}
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<IAccountPayload>) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
    deleteAccount: (state, action: PayloadAction<IAccount>) => {
      state.filter((item) => item.id !== action.payload.id);
    },
    reset: () => initialState,
  },
});

export const { addAccount, deleteAccount, reset } = accountSlice.actions;
export default accountSlice.reducer;
