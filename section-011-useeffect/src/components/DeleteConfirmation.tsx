import React, {useEffect} from 'react'
import {ProgressBar} from "./ProgressBar";

interface DeleteConfirmationInterface {
  onConfirm: () => void
  onCancel: () => void
}

const TIMER = 3000
const INTERVAL_STEPS = 10


export const DeleteConfirmation = ({onConfirm, onCancel}: DeleteConfirmationInterface) => {

  console.log('ReRedner DeleteConfirmation')
  useEffect(() => {
    const t = setTimeout(() => {
        onConfirm()
      }, TIMER
    )

    return () => {
      clearTimeout(t)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar maxtimer={TIMER} intervalsteps={INTERVAL_STEPS} />
    </div>
  );
}
