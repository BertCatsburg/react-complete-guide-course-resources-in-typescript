import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counterSlice'
import {speedSlice} from "./speedSlice";
import {authenticationSlice} from "./authenticationSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    speed: speedSlice.reducer,
    auth: authenticationSlice.reducer,
  }
})

export const counterActions = counterSlice.actions
export const authActions = authenticationSlice.actions
export type RootState = ReturnType<typeof store.getState>
