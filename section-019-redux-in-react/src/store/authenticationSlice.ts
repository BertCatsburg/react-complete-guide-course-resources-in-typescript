import {createSlice} from "@reduxjs/toolkit";

const initialAuthenticationState: { isAuthenticated: boolean } = {
  isAuthenticated: false
}
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthenticationState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.isAuthenticated = false
    }
  }
})
