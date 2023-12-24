import React, {useContext} from 'react'
import { CartContextValueInterface} from "../types/types";
import {CartContext} from "../store/shopping-cart-context";


interface CartInterface {
  onUpdateItemQuantity: (id: string, sortorder: number) => void
}

export const Cart = ({onUpdateItemQuantity}: CartInterface) => {

  const cartCtx: CartContextValueInterface = useContext(CartContext)

  const totalPrice = cartCtx.items.reduce(
    // acc = Accumelator.
    (acc, item) => acc + item.price * item.quantity,
    0 // Starting value
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
