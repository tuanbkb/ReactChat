import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types/user.types";
import { User } from "../types/user";
import { signInWithEmailPassword, signUpWithEmailPassword } from "../services/FirebaseService";

const initialState: UserState = {
  user: {
    uid: "",
    username: "",
    email: "",
    profilePicturePath: undefined,
    createdAt: new Date(),
  },
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const signInEmailPassword = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const user = await signInWithEmailPassword(email, password);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

export const signUpEmailPassword = createAsyncThunk(
  "user/signUp",
  async ({ username, email, password }: { username: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const user = await signUpWithEmailPassword(username, email, password);
      return user;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

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
        uid: "",
        username: "",
        email: "",
        profilePicturePath: "",
        createdAt: new Date(),
      };
    },
    clearError: (state: UserState) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInEmailPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInEmailPassword.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signInEmailPassword.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload as string;
        state.loading = false;
      });
    builder
      .addCase(signUpEmailPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpEmailPassword.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signUpEmailPassword.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload as string;
        state.loading = false;
      });
  }
});

export const userActions = userSlice.actions;

export const selectUser = (state: {user: UserState}) => state.user.user;
export const selectIsLoggedIn = (state: {user: UserState}) =>
  state.user.isLoggedIn;
export const selectLoading = (state: {user: UserState}) => state.user.loading;
export const selectError = (state: {user: UserState}) => state.user.error;

const userReducer = userSlice.reducer;
export default userReducer;

