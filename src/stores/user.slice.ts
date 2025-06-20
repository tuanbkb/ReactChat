import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types/user.types";
import { User } from "../types/user";

const initialState: UserState = {
  user: {
    id: "",
    username: "",
    email: "",
    profilePicturePath: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  isLoggedIn: false,
  error: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    isLoggedIn: (state: UserState, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    isLoggedOut: (state: UserState) => {
      state.isLoggedIn = false;
      state.user = {
        id: "",
        username: "",
        email: "",
        profilePicturePath: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },
  },
  extraReducers: builder => {
    builder
  }
});

export const userActions = userSlice.actions;

export const selectUser = (state: {user: UserState}) => state.user.user;
export const selectIsLoggedIn = (state: {user: UserState}) =>
  state.user.isLoggedIn;
export const selectError = (state: {user: UserState}) => state.user.error;

const userReducer = userSlice.reducer;
export default userReducer;

