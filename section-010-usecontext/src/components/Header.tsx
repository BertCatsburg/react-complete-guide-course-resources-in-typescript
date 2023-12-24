import React, { useRef , useContext} from 'react';
import {CartModal} from './index';
import LogoImage from '../assets/logo.png'
import { CartContext} from "../store/shopping-cart-context";


export const  Header = () => {
  const cartCtx = useContext(CartContext)
  const modal = useRef<any>(null);

  const cartQuantity = cartCtx.items.length;

  function handleOpenCartClick() {
    modal.current?.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        onUpdateCartItemQuantity={cartCtx.updateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src={LogoImage} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
