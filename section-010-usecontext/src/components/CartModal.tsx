import React, {forwardRef, useImperativeHandle, useRef, ForwardedRef} from 'react';
import {createPortal} from 'react-dom';
import {Cart} from './Cart';

interface CartModalInterface {
  onUpdateCartItemQuantity: (productId: string, amount: number) => void
  title: string
  actions: React.JSX.Element
}

export const CartModal = forwardRef(
  (
    {onUpdateCartItemQuantity, title, actions}: CartModalInterface,
    ref: ForwardedRef<any>
  ) => {
    const dialog = useRef<any>();

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
      };
    });

    return createPortal(
      <dialog id="modal" ref={dialog}>
        <h2>{title}</h2>
        <Cart onUpdateItemQuantity={onUpdateCartItemQuantity}/>
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      document.getElementById('modal') as Element
    );
  });
