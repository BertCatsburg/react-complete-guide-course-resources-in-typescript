import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {uiActions} from "./index";
import {dispatchType} from '../types'

// The Item as stored in the Store
export interface ItemInterface {
  id: string
  price: number
  quantity: number
  totalPrice: number
  title: string
}

// The Cart as stored in the Store
interface InitialStateInterface {
  items: ItemInterface[],
  totalQuantity: number,
  totalAmount: number,
}

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
  } as InitialStateInterface,
  reducers: {

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
    }
  }
})


// ********************************************************************************
export const sendCartData = (cart: InitialStateInterface): dispatchType => {
  return async (dispatch: any): Promise<void> => {

    // Side effect in this Custom Reducer
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data!'
      })
    )

    const sendRequest = async (): Promise<void> => {
      const response = await fetch('https://react-udemy-2023-bertc-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTION',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
        }
      })

      if (!response.ok) {
        throw new Error('Sending Cart data failed')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: `Sent cart data failed!: ${error.message}`
          })
        )
      }
    }
  }
}
