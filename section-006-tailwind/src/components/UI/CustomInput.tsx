import React from 'react'
import {Label, Input} from "../index";

interface CustomInputInterface {
  label: string;
  invalid: boolean;
  type: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}


export const CustomInput = ({label, invalid, ...props}: CustomInputInterface) => {
  return (
      <p>
        <Label $invalid={invalid}>{label}</Label>
        <Input $invalid={invalid} {...props} />
      </p>
  )
}
