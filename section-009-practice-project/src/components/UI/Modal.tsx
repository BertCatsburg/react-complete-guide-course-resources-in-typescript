import React, {ReactNode, forwardRef, ForwardedRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from "react-dom"
import {Button} from "../index";

interface ModalInterface {
  children: ReactNode
  buttonCaption?: string | undefined
}

export const Modal = forwardRef(
  (
    {children, buttonCaption}: ModalInterface,
    ref: ForwardedRef<any>
  ) => {

    const dialogRef = useRef<any>()

    useImperativeHandle(
      ref,
      () => {
        return {
          openMyModal() {
              dialogRef.current ? dialogRef.current.showModal() : null
          }
        }
      }
    )
    const overlayRootElement = document.getElementById('modal-root')

    if (!overlayRootElement) return null

    return createPortal(
      <dialog ref={dialogRef} className="backdrop:bg-stone-800/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialod" className="mt-4 text-right">
          <Button>{buttonCaption ?? "Close"}</Button>
        </form>
      </dialog>,
      overlayRootElement
    )
  },
)
