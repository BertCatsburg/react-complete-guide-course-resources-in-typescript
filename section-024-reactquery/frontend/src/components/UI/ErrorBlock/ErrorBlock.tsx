import React from 'react'
import {MyError} from "../../types";

interface ErrorBlockInterface {
  title: string
  message?: string | undefined
  error?: MyError | undefined
}

export const  ErrorBlock = ({ title, message, error }: ErrorBlockInterface) => {
  let myMessage = message
  if (!message && error) {
    myMessage = error.info
  }
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{title}</h2>
        <p>{myMessage}</p>
      </div>
    </div>
  );
}
