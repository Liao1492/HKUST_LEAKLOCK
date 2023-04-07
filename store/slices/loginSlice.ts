import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILogin {
  loggedIn: boolean;
}
const initialState: ILogin = { loggedIn: false };

export const accountSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.loggedIn = true;
    },

    reset: () => initialState,
  },
});

export const { setLoggedIn, reset } = accountSlice.actions;
export default accountSlice.reducer;
