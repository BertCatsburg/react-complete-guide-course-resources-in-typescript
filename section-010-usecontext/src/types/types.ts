export interface ShoppingCartInterface {
  items: CartItemInterface[]
}

export interface CartItemInterface {
  id: string
  name: string
  price: number
  quantity: number
}

export interface CartContextValueInterface {
  items: CartItemInterface[],
  addItemToCart: (id: string) => void
  updateCartItemQuantity: (productId: string, amount: number) => void
}

export interface ProductInterface {
  id: string
  image: string
  title: string
  price: number
  description: string
}
