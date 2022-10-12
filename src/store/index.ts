import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducer from "./reducers";

export const store = configureStore({
  reducer,
  middleware: [thunk as ThunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
