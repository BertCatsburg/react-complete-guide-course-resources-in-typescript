import {createPortal} from 'react-dom';
import React, {MouseEventHandler} from 'react'

interface ModalInterface {
  title: string
  children: React.ReactNode
  onClose: MouseEventHandler<HTMLDivElement>
}

export const Modal = ({title, children, onClose}: ModalInterface) => {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}/>
      <dialog open className="modal">
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.getElementById('modal') as HTMLElement
  );
}
