import {forwardRef, useImperativeHandle, useRef, ReactNode, ForwardedRef} from 'react';
import {createPortal} from 'react-dom';
import React from 'react'


interface ModalInterface {
  children: ReactNode
}

export const Modal = forwardRef(
  (
    {children}: ModalInterface,
    ref: ForwardedRef<any>
  ) => {
    const dialog = useRef<any>();

    useImperativeHandle(ref, () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
        close: () => {
          dialog.current.close();
        },
      };
    });

    return createPortal(
      <dialog className="modal" ref={dialog}>
        {children}
      </dialog>,
      document.getElementById('modal') as Element
    );
  });
