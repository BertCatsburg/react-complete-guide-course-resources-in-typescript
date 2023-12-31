import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NotificationActionInterface {
  status: string
  title: string
  message: string
}
interface InitialStateInterface {
  cartIsVisible: boolean
  notification: NotificationActionInterface | null
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: <InitialStateInterface>{ cartIsVisible: false, notification: null},
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification: (state, action: PayloadAction<NotificationActionInterface>) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})
