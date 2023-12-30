import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from './counterSlice'
import {speedSlice} from "./speedSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    speed: speedSlice.reducer
  }
})

export const counterActions = counterSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
