import React from 'react'

interface ErrorInterface {
  title: string
  message: string
  onConfirm?: () => void
}

export const  Error = ({ title, message, onConfirm }: ErrorInterface) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
