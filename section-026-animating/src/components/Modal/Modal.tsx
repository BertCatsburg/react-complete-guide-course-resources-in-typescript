import {createPortal} from 'react-dom';
import React, {MouseEventHandler} from 'react'
import {motion} from "framer-motion";

interface ModalInterface {
  title: string
  children: React.ReactNode
  onClose: MouseEventHandler<HTMLDivElement>
}

export const Modal = ({title, children, onClose}: ModalInterface) => {
  return createPortal(
    <>
      <div
        className="backdrop"
        onClick={onClose}
      />
        <motion.dialog
          key="modal"
          open
          className="modal"
          variants={{
            hidden: {opacity: 0, y: 50, transition: {duration: 0.3}},
            visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h2>{title}</h2>
          {children}
        </motion.dialog>
    </>,
    document.getElementById('modal') as HTMLElement
  );
}
