import React, {createContext, Context, ReactNode, useReducer} from 'react'
import {CartContextValueInterface, CartItemInterface} from "../types/types";
import {DUMMY_PRODUCTS} from "../data";

export const CartContext: Context<CartContextValueInterface> = createContext<CartContextValueInterface>({
  items: [], // Initial value
  addItemToCart: () => {
  }, // Initial value
  updateCartItemQuantity: (_productId: string, _amount: number) => {
  }
})

interface CartContextProviderInterface {
  children: ReactNode
}

const shoppingCartReducer = (
  state: {items: CartItemInterface[]},
  action: {type: string, payload: any}
) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      updatedItems[existingCartItemIndex] = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      }
    } else {
      const product =
        DUMMY_PRODUCTS.find((product) => product.id === action.payload.id);
      if (product) {
        updatedItems.push({
          id: action.payload.id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }
    }

    return {
      ...state, // Not really needed because we have only 1 value in the State.
      items: updatedItems,
    };
  }

  if (action.type === 'UPDATE_ITEM') {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state
}

export const CartContextProvider = ({children}: CartContextProviderInterface) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: []
    })

  const handleAddItemToCart = (id: string) => {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: {id: id}
    })
  }

  const handleUpdateCartItemQuantity = (productId: string, amount: number) => {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId: productId,
        amount: amount
      }
    })
  }

  const ctxValue: CartContextValueInterface = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  }

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  )
}
