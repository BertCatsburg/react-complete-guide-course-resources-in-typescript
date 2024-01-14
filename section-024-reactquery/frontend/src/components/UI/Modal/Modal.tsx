import { useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';
import React from 'react'

interface ModalInterface {
  children: React.ReactNode
  onClose: () => void
}
export const  Modal = ({ children, onClose }: ModalInterface) => {
  const dialog = useRef<any>();

  useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close(); // needed to avoid error being thrown
    };
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
}
