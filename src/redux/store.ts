import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../stores/user.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whiteList: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
