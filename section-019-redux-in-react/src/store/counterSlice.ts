import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterStateInterface {
  counter: number
  showCounter: boolean
}

const initialCounterState: CounterStateInterface = {counter: 0, showCounter: true}

// Create the Slice of the Global Stage
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      // Change the old state.
      // Redux-Toolkit takes care of immutability.
      // See package 'immer'
      state.counter++
    },
    decrement: (state) => {
      state.counter--
    },
    increase: (state, action: PayloadAction<{amount: number}>) => {
      state.counter = state.counter + action.payload.amount
    },
    toggleCounter: (state) => {
      console.log('sdflkjsdflkj')
      state.showCounter = !state.showCounter
    },
  }
})
