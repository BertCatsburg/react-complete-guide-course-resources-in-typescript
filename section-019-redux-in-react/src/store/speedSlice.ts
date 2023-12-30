import {createSlice} from "@reduxjs/toolkit";

export const speedSlice = createSlice({
  name: 'speed',
  initialState: {speed: 80},
  reducers: {
    peddletothemeddle: (state) => {
      state.speed = state.speed + 10
    },
    brakes: (state) => {
      state.speed = state.speed - 5
    },
    crash: (state) => {
      state.speed = 0
    }
  }
})
