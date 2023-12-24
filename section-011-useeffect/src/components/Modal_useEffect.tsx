// The Modal with useEffect
import {useRef, ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';
import React from 'react'


interface ModalInterface {
  open: boolean
  children: ReactNode
  onClose: () => void
}

export const Modal = ({open, children, onClose}: ModalInterface) => {
  const dialog = useRef<any>();

    useEffect(() => {
      // Use useEffect here to sync with DOM API (Browser)
      if (open) {
        dialog.current.showModal()
      } else {
        dialog.current.close()
      }
    }, [open])

    return createPortal(
      <dialog className="modal" ref={dialog} onClose={onClose}>
        {open ? children : null}
      </dialog>,
      document.getElementById('modal') as Element
    );
  };
