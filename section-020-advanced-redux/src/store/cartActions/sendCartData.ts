import {CartStateInterface, dispatchType} from '../../types'
import {uiActions} from "../index";

export const sendCartData = (cart: CartStateInterface): dispatchType => {
  return async (dispatch: any): Promise<void> => {

    // Side effect in this Custom Action Creator
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data!'
      })
    )

    // Create a function doing an async HTTP requst
    const sendRequest = async (): Promise<void> => {
      // Async Side Effect: Doing an HTTP request
      const response = await fetch('https://react-udemy-2023-bertc-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalAmount: cart.totalAmount,
        }),
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
      // Calling that async HTTP Request
      await sendRequest()
      // Another side effect in the Custom Action Creator
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Another side effect in the Custom Action Creator
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
