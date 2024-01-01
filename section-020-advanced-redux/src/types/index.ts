export type dispatchType =  (dispatch: any) => Promise<void>

// The Item as stored in the Store
export interface ItemInterface {
  id: string
  price: number
  quantity: number
  totalPrice: number
  title: string
}

// The Cart as stored in the Store
export interface CartStateInterface {
  items: ItemInterface[],
  totalQuantity: number,
  totalAmount: number,
  changed: boolean,
}
