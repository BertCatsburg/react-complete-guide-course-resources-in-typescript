import React, {ComponentPropsWithoutRef} from 'react'

interface InputInterface extends ComponentPropsWithoutRef<"input"> {
  label: string
  id: string
  error: string | boolean
}
export const Input = ({label, id, error, ...props}: InputInterface ) => {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
      <div className="control-error">
        {!!error && <p>{error}</p>}
      </div>
    </div>
  )
}
