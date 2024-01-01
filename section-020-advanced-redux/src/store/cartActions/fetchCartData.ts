import {CartStateInterface, dispatchType} from '../../types'
import {uiActions, cartActions} from "../index";

export const fetchCartData = (): dispatchType => {
  return async (dispatch: any): Promise<void> => {

    // Create a function doing an async HTTP request
    const fetchRequest = async (): Promise<CartStateInterface> => {

      // Async Side Effect: Doing an HTTP request
      const response = await fetch('https://react-udemy-2023-bertc-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTION',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
        }
      })

      if (!response.ok) {
        throw new Error('Fetching Cart data failed')
      }

      return await response.json()
    }

    try {
      // Calling that async HTTP Request
      const cartData: CartStateInterface = await fetchRequest()
      // Update the Redux State
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
        totalAmount: cartData.totalAmount,
        changed: false,
      }))

    } catch (error: unknown) {
      if (error instanceof Error) {
        // Another side effect in the Custom Action Creator
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: `Fetch cart data failed!: ${error.message}`
          })
        )
      }
    }
  }
}
