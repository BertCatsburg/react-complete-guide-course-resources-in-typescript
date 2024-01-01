import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartStateInterface} from '../types'

// The Item for the AddItemToCart Action
interface AddItemInterface {
  id: string
  title: string
  price: number
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false
  } as CartStateInterface,
  reducers: {

    replaceCart: (state, action: PayloadAction<CartStateInterface>) => {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },

    addItemToCart: (state, action: PayloadAction<AddItemInterface>) => {
      const newItem: AddItemInterface = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,

        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
      state.totalAmount = state.totalAmount + newItem.price
      state.totalQuantity++
      state.changed = true
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload // Payload is only the ID of the Item to be deleted

      const existingItem = state.items.find(item => item.id === id)
      if (!existingItem) return
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
      state.totalQuantity--
      state.totalAmount = state.totalAmount - existingItem.price
      state.changed = true
    }
  }
})

